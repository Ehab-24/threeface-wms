import { onMounted, onUnmounted } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import app from "./firebase";

const auth = getAuth(app);

const useAuthState = () => {
  const user = ref(null);
  const error = ref(null);

  let unsubscribe;

  onMounted(() => {
    unsubscribe = onAuthStateChanged(
      auth,
      (u) => {
        user.value = u;
      },
      (e) => {
        error.value = e;
      }
    );
  });
  onUnmounted(() => unsubscribe());

  const isAuthenticated = computed(() => user.value !== null);

  return { user, error, isAuthenticated };
};

const getUserState = async () => {
  const user = await new Promise((resolve, reject) =>
    onAuthStateChanged(auth, resolve, reject)
  );
  return user;
};

export { useAuthState, getUserState };

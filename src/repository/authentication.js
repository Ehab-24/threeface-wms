import { onMounted, onUnmounted } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import app from "./firebase";

const auth = getAuth(app);

// ! I dont't think this is needed
// const useAuthState = () => {
  
//   const user = ref(null);
//   const error = ref(null);
  
//   let unsubscribe;
  
//   // Subscribe to the user state and return it as a ref
//   onMounted(() => {
//     unsubscribe = onAuthStateChanged(
//       auth,
//       (u) => {
//         user.value = u;
//       },
//       (e) => {
//         error.value = e;
//       }
//     );
//   });

//   // Unsubscribe from the user state when the component is unmounted
//   onUnmounted(() => unsubscribe());

//   const isAuthenticated = computed(() => user.value !== null);

//   return { user, error, isAuthenticated };
// };

const getUserState = async () => {
  // Returns a promise that resolves to the user object
  // or null if no user is signed in.
  const user = await new Promise((resolve, reject) =>
    onAuthStateChanged(auth, resolve, reject)
  );
  return user;
};

export { getUserState };

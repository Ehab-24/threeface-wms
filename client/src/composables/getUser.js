import { ref } from "vue";

const getUser = (id) => {
  const user = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
      if (!response.ok) {
        throw new Error("Unable to load user!");
      }

      const data = await response.json();
      user.value = data;
    } catch (error) {
      error.value = error.message;
    }
  };

  load();

  return {
    user,
    error,
  };
};

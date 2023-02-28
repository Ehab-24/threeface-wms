
import { ref } from "vue";


const getProjects = () => {
  const projects = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=8&_page=2"
      );
      
      if (response.ok) {
        const data = await response.json();
        projects.value = data;

        return;
      }
      
      error.value = "Unable to load projects!";

    } catch (error) {
      error.value = error.message;
    }
  };

  load();

  return {
    projects, error
  };
};


export default getProjects;
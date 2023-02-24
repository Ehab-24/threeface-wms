import { ref } from "vue";

const getProject = (id) => {
    const project = ref(null);
    const error = ref(null);

    const load = async () => {
        try {
            
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts/" + id
            );
            if (!response.ok) {
                throw new Error("Unable to load project!");
            }

            const data = await response.json();
            project.value = data;

        } catch (error) {
            error.value = error.message;
        }
    }

    load();

    return {
        project, error
    };
};

export default getProject;
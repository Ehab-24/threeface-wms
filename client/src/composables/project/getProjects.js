import { ref } from "vue";
import { doc, query, collection, getDocs } from "firebase/firestore";

const getProjects = async () => {
  const projects = ref([]);
  const error = ref(null);

  // const load = async () => {
  //   try {
  //     console.log("🚀 ~ file: getProjects.js:12 ~ load ~ db:", db);
  //     const q = query(collection(db, 'users', 'Q75ybeGzgGeymeEOA31thLzZcLb2', 'projects'));
  //     console.log("🚀 ~ file: getProjects.js:12 ~ load ~ q:", q)

  //     const snapshot = await getDocs(q);
  //     snapshot.forEach((document) => {
  //       console.log(document.id, " => ", document.data());
  //     });
  //     projects.value = snapshot.docs.map((doc) => {
  //       return { ...doc.data(), id: doc.id };
  //     });
  //   } catch (error) {
  //     error.value = error.message;
  //   }
  // };
  // load();
  projects.value = await fetch("http://localhost:3000/project", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",

    },
  });
  console.log(
    "🚀 ~ file: getProjects.js:27 ~ getProjects ~ projects:",
    projects
  );

  return {
    projects,
    error,
  };
};

export default getProjects;

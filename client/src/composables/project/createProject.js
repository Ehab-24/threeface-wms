import { addDoc, Timestamp, collection } from "firebase/firestore";
import db from "../../firebase/firestore.js";

const createProject = async (project) => {
  // const projRef = await addDoc(
  //   collection(db, "users", "Q75ybeGzgGeymeEOA31thLzZcLb2", "projects"),
  //   {
  //     title: project.title,
  //     description: project.description,
  //     createdAt: Timestamp.fromDate(new Date()),
  //     lastUpdated: Timestamp.fromDate(new Date()),
  //     deadline: Timestamp.fromDate(project.deadline),
  //     status: project.status,
  //   }
  // );

  const res = await fetch("http://localhost:3000/project", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });

  console.log("~ createProject.js ~ Project created successfully with ID: ", projRef.id);
};

export default createProject;

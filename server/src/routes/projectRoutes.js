const router = require("./index");
const projectController = require("../controllers/projectController");

module.exports = (router) => {

/* ********** Mutation ********** */
  router.post("/project", projectController.createProject);
  router.patch("/project/:id", projectController.updateProject);
  router.delete("/project/:id", projectController.deleteProject);

/* ********** Query ********** */
  router.get("/project/:id", projectController.getProject);
  router.get("/user/:uid/projects", projectController.getProjectsForUser);
};

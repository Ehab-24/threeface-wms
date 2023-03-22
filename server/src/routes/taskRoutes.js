const taskController = require("../controllers/taskController");

module.exports = (router) => {
  /* ********** Mutation ********** */
  router.post("/task", taskController.createTask);
  router.patch("/task/:id", taskController.updateTask);
  router.delete("/task/:id", taskController.deleteTask);

  /* ********** Query ********** */
  router.get("/task/:id", taskController.getTask);
  router.get("/project/:pid/tasks", taskController.getTasksForProject);
  router.get("/task/:id/comments", taskController.getCommentsForTask);
  router.get("/project/:pid/taskCount", taskController.getTaskCountForProject);
};

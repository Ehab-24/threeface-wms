const issueController = require("../controllers/issueController");

module.exports = (router) => {
    
/* ********** Mutation ********** */

/* ********** Query ********** */
  router.get(
    "/project/:pid/issueCount",
    issueController.getIssueCountForProject
  );
  router.get("/project/:pid/issues", issueController.getIssuesForProject);
  router.get("/issue/:id", issueController.getIssue);
  router.get("/issue/:id/comments", issueController.getCommentsForIssue);
};

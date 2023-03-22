const userController = require("../controllers/userController");

module.exports = (router) => {
    
// TODO /* ********** Mutation ********** */

/* ********** Query ********** */
  router.get("/users", userController.getAllUsers);
  router.get("/user/:id", userController.getUser);
};

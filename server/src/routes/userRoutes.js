const userController = require("../controllers/userController");

module.exports = (router) => {
    
/* ********** Mutation ********** */
  router.post("/user", userController.createUser);
  router.post("/user/login", userController.loginUser);

/* ********** Query ********** */
  router.get("/user/:id", userController.getUser);
};

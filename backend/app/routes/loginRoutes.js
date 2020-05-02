module.exports = app => {
    const controllers = require("../controllers");    
    var router = require("express").Router();

    router.post("/google", controllers.loginController.loginWithGoogle);

    app.use('/api/login', router);
  };
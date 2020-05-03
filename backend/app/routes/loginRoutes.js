module.exports = app => {
    const controllers = require("../controllers");    

    var loginRouter = require("express").Router();
    loginRouter.post("/google", controllers.loginController.loginWithGoogle);
    loginRouter.post("/twitter", controllers.loginController.loginWithTwitter);


    var registrationRouter = require("express").Router();
    registrationRouter.post("/google", controllers.loginController.addGoogleAccount);
    registrationRouter.post("/twitter", controllers.loginController.addTwitterAccount);


    app.use('/api/login', loginRouter);
    app.use('/api/registration', registrationRouter);
  };
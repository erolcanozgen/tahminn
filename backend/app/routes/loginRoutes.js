module.exports = app => {
  const controllers = require("../controllers");
  const passport = require('passport')

  // Setting up the passport middleware for each of the OAuth providers
  const googleAuth = passport.authenticate('google', { scope: ['profile'] })
  const twitterAuth = passport.authenticate('twitter')


  var loginRouter = require("express").Router();

  // This custom middleware allows us to attach the socket id to the session
  // With that socket id we can send back the right user info to the right 
  // socket
  loginRouter.use('/oauth', function (req, res, next) {
    if (req.query.socketId) {
      req.session.socketId = req.query.socketId;
    }
    next();
  })

  loginRouter.post("/google", controllers.loginController.loginWithGoogle);
  loginRouter.post("/twitter", controllers.loginController.loginWithTwitter);

  loginRouter.get("/oauth/google", googleAuth);
  loginRouter.get("/oauth/twitter", twitterAuth);

  // Routes that are triggered by the callbacks from each OAuth provider once 
  // the user has authenticated successfully
  loginRouter.get('/oauth/google/callback', googleAuth, controllers.loginController.oauthCallbackForGoogle)
  loginRouter.get('/oauth/twitter/callback', twitterAuth, controllers.loginController.oauthCallbackForTwitter)


  
  var registrationRouter = require("express").Router();
  registrationRouter.post("/google", controllers.loginController.addGoogleAccount);
  registrationRouter.post("/twitter", controllers.loginController.addTwitterAccount);


  app.use('/api/login', loginRouter);
  app.use('/api/registration', registrationRouter);

  app.get('/api/logout',controllers.loginController.logout)
};
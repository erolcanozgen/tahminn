module.exports = app => {
    const controllers = require("../controllers");


    var interestRouter = require("express").Router();
    interestRouter.get("/getAllInterests", controllers.interestController.getAllInterests)

    app.use('/api/interest', interestRouter);
};
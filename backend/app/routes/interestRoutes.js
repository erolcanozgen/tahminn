module.exports = app => {
    const controllers = require("../controllers");


    var interestRouter = require("express").Router();
    interestRouter.get("/getAllInterests", controllers.interestController.getAllInterests)
    interestRouter.post("/addInterests", controllers.interestController.addInterests)

    app.use('/api/interest', interestRouter);
};
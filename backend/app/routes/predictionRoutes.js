module.exports = app => {
    const controllers = require("../controllers");
    
    app.use("/api/getRecommendedPredictions", controllers.predictionController.getRecommendedPredictions);
}
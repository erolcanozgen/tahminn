module.exports = app => {
    const controllers = require("../controllers");
    
    app.use("/api/getRecommendedPredictions", controllers.predictionController.getRecommendedPredictions);
    app.use("/api/getPredictionDetails", controllers.predictionController.getPredictionDetails);
    app.use("/api/savePrediction", controllers.predictionController.savePrediction);
}
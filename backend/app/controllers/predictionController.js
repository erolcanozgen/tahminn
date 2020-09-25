const db = require("../models");
const { addTwitterAccount } = require("./loginController");

exports.getRecommendedPredictions = (req, res) => {
    const userId = req.query.userId;
    db.prediction.findAll({
        include: {
            model: db.interest,
            include: {
                model: db.user,
                as: 'interested_users',
                where: {
                    id: userId
                }
            }
        }
    }).then((result) => {
        console.log(result);
        res.send(result.map(x => { id: x.id }));
    })
}
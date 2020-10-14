const db = require("../models");
const { addTwitterAccount } = require("./loginController");

exports.getRecommendedPredictions = (req, res) => {
    const userId = req.query.userId;
    db.prediction.findAll({
        include: [{
            model: db.interest,
            include: {
                model: db.user,
                as: 'interested_users',
                where: {
                    id: userId
                }
            }
        },
        {
            model: db.prediction_translation,
            as: 'name',
            where: {
                language_id: 1033
            }
        }]
    }).then((result) => {
        res.send(result.map(x => ({
            id: x.id,
            name: x.name[0].text,
            dueDate: x.dueDate
        })));
    })
}

exports.getPredictionDetails = (req, res) => {
    const predictionId = req.query.predictionId;
    const queryObj = {
        attributes: ['id', 'dueDate', 'interestId', 'predictionTypeId', 'result', 'resultDate', 'score', 'name.text'],
        where: {
            id: predictionId
        },
        include: [ 
            {
                attributes: ['text'],
                model: db.prediction_translation,
                as: 'name',
                where: {
                    language_id: 1033
                }
            },
            {
                model: db.prediction_options
            }
        ]
    }
    if (req.session.passport && req.session.passport.user) {
        let user = req.session.passport.user;
        queryObj.include.push({
            attributes: ['optionId'],
            as: 'selectedOption',
            model: db.prediction_history,
            where: {
                userId: user.id
            },
            required: false
        })
    }
    
    db.prediction.findAll(queryObj).then((result) => {
        res.send(result[0]);
    })
}

exports.savePrediction = (req, res) => {
    const {predictionId, optionId} = req.query;
    if (req.session.passport && req.session.passport.user) {
        let user = req.session.passport.user;
        db.prediction_history.create({
            userId: user.id,
            predictionId: predictionId,
            optionId: optionId
        });
    }
    else
        res.send({ IsAuthenticated: false })
}
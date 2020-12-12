const db = require("../models");

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
            },
            required: true
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

exports.getLatestPredictions = (req, res) => {
    db.prediction.findAll({
        include: [
        {
            model: db.prediction_translation,
            as: 'name',
            where: {
                language_id: 1033
            }
        }],
        order: [
            ['createdAt', 'DESC']
        ]
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
                as: 'selectedOptions',
                model: db.prediction_history,
                required: false
            },
            {
                model: db.prediction_options
            }
        ]
    }
    
    db.prediction.findAll(queryObj).then((result) => {
        const predictionDetail = result[0];
        const numberOfAllPredictions = predictionDetail.selectedOptions.length;
        if(numberOfAllPredictions != 0){
            predictionDetail.prediction_options.forEach(prediction_option => {
                const numberOfSelected = predictionDetail.selectedOptions.filter(option => option.optionId === prediction_option.id).length;
                prediction_option.set('rate', ((numberOfSelected /  numberOfAllPredictions) * 100).toFixed(2));
            });
        }
        else{
            predictionDetail.prediction_options.forEach(prediction_option => {
                prediction_option.set('rate', "0");
            });
        }
        
        if (req.session.passport && req.session.passport.user) {
            let user = req.session.passport.user;
            predictionDetail.set('selectedOptions', predictionDetail.selectedOptions.filter(selection => selection.userId === user.id));
        }
        else {
            predictionDetail.set('selectedOptions', []);
        }

        res.send(predictionDetail);
    })
}

exports.savePrediction = (req, res) => {
    const {predictionId, optionId} = req.query;
    if (req.session.passport && req.session.passport.user) {
        let user = req.session.passport.user;
        db.prediction_history.upsert({
            userId: user.id,
            predictionId: predictionId,
            optionId: optionId
        }).then(result => {
            res.send({status: 'successful'});
        });
    }
    else
        res.send({ status: 'unauthorized' });
}

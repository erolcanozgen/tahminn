const db = require('../')

const predictions = [
    {
        dueDate: Date.now(),
        resultDate: new Date(2020, 2, 12),
        result: 'Lewis Hamilton',
        score: 150,
        interestId: 71,
        name: [{
            language_id: 1033,
            text: '2019-2020 Formula 1 Kazananı',
        },
        {
            language_id: 1031,
            text: '2019-2020 Formula 1 Winner',
        }],
        predictionTypeId:2
    },
    {
        dueDate: Date.now(),
        resultDate: new Date(2020, 8, 1),
        result: '-',
        score: 300,
        interestId: 1,
        name: [{
            language_id: 1033,
            text: '2019-2020 Türkiye Süper Lig Kazananı',
        },
        {
            language_id: 1031,
            text: '2019-2020 Turkish Super Lig Winner',
        }],
        predictionTypeId:2
    },
    {
        dueDate: Date.now(),
        resultDate: new Date(2020, 7, 1),
        result: '-',
        score: 500,
        interestId: 1,
        name: [{
            language_id: 1033,
            text: '2019-2020 Survivor Kazananı',
        },
        {
            language_id: 1031,
            text: '2020 Survivor Winner',
        }],
        predictionTypeId:2
    }
]

module.exports = function () {
    predictions.forEach((prediction)=>{
        db.prediction.create(prediction, {
            include: [{
                association: db.prediction_translation_association,
            }]
        });
    })
}





// db.prediction.findOne({
//     where: { id: 11 },
//     include: [
//         {
//             model: db.prediction_translation,
//             as: 'name'
//         }
//     ],
// }).then((prediction) => {
//     console.log(prediction);
//     console.log(prediction.name[1]);
//     console.log(prediction.name[2]);
// }).catch((err) => {
//     console.log(err);
// });
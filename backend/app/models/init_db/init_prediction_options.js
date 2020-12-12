const db = require('..')

const predictionOptions = [
    {
        name: 'Egan Bernal',
        predictionId: 201
    },
    {
        name: 'Primož Roglič',
        predictionId: 201
    },
    {
        name: 'Nairo Quintana',
        predictionId: 201
    },
    {
        name: 'Thibaut Pinot',
        predictionId: 201
    },
    {
        name: 'Tom Dumoulin',
        predictionId: 201
    },
    {
        name: 'Tadej Pogačar',
        predictionId: 201
    },
    {
        name: 'Daniel Martínez',
        predictionId: 201
    },
    {
        name: 'Mikel Landa',
        predictionId: 201
    },
    {
        name: 'Miguel Ángel López',
        predictionId: 201
    },
    {
        name: 'Julian Alaphilippe',
        predictionId: 201
    },
    {
        name: 'Lewis Hamilton',
        predictionId: 191
    },
    {
        name: 'Valtteri Bottas',
        predictionId: 191
    },
    {
        name: 'Max Verstappen',
        predictionId: 191
    },
    {
        name: 'Carlos Sainz',
        predictionId: 191
    },
    {
        name: 'Lando Norris',
        predictionId: 191
    },
    {
        name: 'Sergio Perez',
        predictionId: 191
    },
    {
        name: 'Charles Leclerc',
        predictionId: 191
    },
    {
        name: 'Sebastian Vettel',
        predictionId: 191
    },
    {
        name: 'Galatasaray',
        predictionId: 161
    },
    {
        name: 'Fenerbahçe',
        predictionId: 161
    },

]

module.exports = function () {
    predictionOptions.forEach((predictionOption)=>{
        db.prediction_options.create(predictionOption, {
            include: [{
                association: db.prediction_option_relation,
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
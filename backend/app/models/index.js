const Sequelize = require("sequelize");
const connection = new Sequelize('mysql://bc30edd2be0aa9:ad64befc@eu-cdbr-west-03.cleardb.net/heroku_2e014cfc6fcc330')

const db = {};
db.Sequelize = Sequelize;
db.connection = connection;

db.user = require("./user")(connection, Sequelize)

db.google_account = require("./google_account")(connection, Sequelize)
db.userGoogleAccounts = db.google_account.belongsTo(db.user) // puts freignKey UserID in google_accounts table.

db.twitter_account = require("./twitter_account")(connection, Sequelize)
db.userTwitterAccounts = db.twitter_account.belongsTo(db.user) // puts freignKey UserID in google_accounts table.

db.interest = require("./interest")(connection, Sequelize)
//#region UserInterest Association
db.user.belongsToMany(db.interest, { as: 'interests', through: 'userInterests' })
db.interest.belongsToMany(db.user, { as: 'interested_users', through: 'userInterests' })
//#endregion

db.prediction_type_translation = require("./prediction_type_translation")(connection, Sequelize)
db.prediction_translation = require("./prediction_translation")(connection, Sequelize)

db.prediction_type = require("./prediction_type")(connection, Sequelize)
db.prediction_type_translation.belongsTo(db.prediction_type)
db.prediction_type_translation_association = db.prediction_type.hasMany(db.prediction_type_translation, { as: 'name' })

db.prediction = require("./prediction")(connection, Sequelize)
db.prediction_translation.belongsTo(db.prediction)
db.prediction_translation_association = db.prediction.hasMany(db.prediction_translation, { as: 'name' })

db.prediction_interest = db.prediction.belongsTo(db.interest)
db.prediction_type_association = db.prediction.belongsTo(db.prediction_type)


db.prediction_options = require("./prediction_option")(connection, Sequelize)
db.prediction_option_relation = db.prediction_options.belongsTo(db.prediction)



module.exports = db;

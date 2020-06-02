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

db.localized_resource = require("./localized_resource")(connection, Sequelize)

db.prediction_type = require("./prediction_type")(connection, Sequelize)
db.prediction_type_localized_name = db.prediction_type.belongsTo(db.localized_resource, { foreignKey: 'name_resource_id' })

db.prediction = require("./prediction")(connection, Sequelize)
db.prediction_localized_name = db.prediction.belongsTo(db.localized_resource, { foreignKey: 'name_resource_id' })

db.prediction_interest = db.prediction.belongsTo(db.interest)

db.prediction_options = require("./prediction_option")(connection, Sequelize)
db.prediction_option_relation = db.prediction_options.belongsTo(db.prediction)



module.exports = db;

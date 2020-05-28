const Sequelize = require("sequelize").Sequelize;
const connection = new Sequelize('mysql://bc30edd2be0aa9:ad64befc@eu-cdbr-west-03.cleardb.net/heroku_2e014cfc6fcc330')

const db = {};
db.Sequelize = Sequelize;
db.connection = connection;

db.user = require("./user")(connection, Sequelize)

db.google_account = require("./google_account")(connection, Sequelize)
db.userGoogleAccounts = db.google_account.belongsTo(db.user, { onDelete: 'cascade' }) // puts foreignKey UserID in google_accounts table.

db.twitter_account = require("./twitter_account")(connection, Sequelize)
db.userTwitterAccounts = db.twitter_account.belongsTo(db.user, { onDelete: 'cascade' }) // puts foreignKey UserID in google_accounts table.

db.interest = require("./interest")(connection, Sequelize)
//#region UserInterest Association
db.user.belongsToMany(db.interest, { as: 'interests', through: 'userInterests' })
db.interest.belongsToMany(db.user, { as: 'interested_users', through: 'userInterests' })
//#endregion

db.category = require("./category")(connection, Sequelize)
db.interestCategory = db.interest.belongsTo(db.category, { foreignKey: 'categoryId' }, { onDelete: 'cascade' }) // puts foreignKey categoryId in interests table.

module.exports = db;

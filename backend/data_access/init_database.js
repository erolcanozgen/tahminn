const Sequelize = require('sequelize')
const Models = require('./Models')

exports.init_db = (recreate) => {
    const connection = new Sequelize('mysql://bc30edd2be0aa9:ad64befc@eu-cdbr-west-03.cleardb.net/heroku_2e014cfc6fcc330')

    const user = Models.user(connection,Sequelize.DataTypes)
    
    const google_account = Models.google_account(connection,Sequelize.DataTypes)
    google_account.belongsTo(user) // puts freignKey UserID in google_accounts table.

    const twitter_account = Models.twitter_account(connection,Sequelize.DataTypes)
    twitter_account.belongsTo(user) // puts freignKey UserID in google_accounts table.


    const interest = Models.interest(connection,Sequelize.DataTypes)

    //#region UserInterest Association
    user.belongsToMany(interest, { as: 'interests', through: 'userInterests' })
    interest.belongsToMany(user, { as: 'interested_users', through: 'userInterests' })
    //#endregion

    // sync the database
    connection
        .sync({
            force: recreate
        })
}




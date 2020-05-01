module.exports = function(sequelize, DataTypes) {
    return sequelize.define('twitter_account', {
        twitter_id:
        {
            type: DataTypes.STRING,
            primaryKey: true
        }
    })
}
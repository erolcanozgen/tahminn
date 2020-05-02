module.exports = function(sequelize, DataTypes) {
    return sequelize.define('google_account', {
        google_id:
        {
            type: DataTypes.STRING,
            primaryKey: true
        }
    })
}
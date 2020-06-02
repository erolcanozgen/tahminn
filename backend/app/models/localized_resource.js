
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('localized_resource',{
        language_id: DataTypes.INTEGER,
        text: DataTypes.STRING
    });
}


module.exports = function(sequelize, DataTypes) {
    return sequelize.define('prediction_translation',{
        language_id: DataTypes.INTEGER,
        text: DataTypes.STRING
    });
}

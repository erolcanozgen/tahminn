
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('prediction_type_translation',{
        language_id: DataTypes.INTEGER,
        text: DataTypes.STRING
    });
}

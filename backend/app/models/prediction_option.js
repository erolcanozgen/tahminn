
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('prediction_option',{
        icon: DataTypes.BLOB,
        name: DataTypes.STRING,
        rate: DataTypes.VIRTUAL
    });
}


module.exports = function(sequelize, DataTypes) {
    return sequelize.define('prediction',{
        dueDate: DataTypes.DATE,
        resultDate: DataTypes.DATE,
        result: DataTypes.STRING,
        score: DataTypes.INTEGER
    });
}

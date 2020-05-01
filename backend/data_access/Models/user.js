
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user',{
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        pictureURL: DataTypes.STRING
    });
}

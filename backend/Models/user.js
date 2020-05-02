
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user',{
        username: DataTypes.STRING,
        description: DataTypes.TEXT,
        pictureURL: DataTypes.STRING
    });
}

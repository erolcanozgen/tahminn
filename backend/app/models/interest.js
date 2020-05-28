module.exports = function(sequelize, DataTypes) {
    return sequelize.define('interest', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        imageUrl: DataTypes.STRING
    })
}


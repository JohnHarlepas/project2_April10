

module.exports = function(sequelize, DataTypes) {
    var login = sequelize.define("login", {
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return login;
  };
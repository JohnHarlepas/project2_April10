module.exports = function(sequelize, DataTypes) {
    var Login = sequelize.define("Login", {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    });
    return Login;
  };
module.exports = function(sequelize, DataTypes) {
    var masterPlaybook = sequelize.define("masterPlaybook", {
      team: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ballside: {
        type: DataTypes.STRING,
        allowNull: false
      },
      formation: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      inForm: {
        type: DataTypes.STRING,
        allowNull: false
      },
      playname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false
      }
      
    });
    return masterPlaybook;
  };
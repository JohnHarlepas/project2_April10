


module.exports = function(sequelize, DataTypes) {
    var customPlaybook = sequelize.define("customPlaybook", {
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
      },
      classMethods: { //this should be the foreignkey, if not, this is where the foreign key can be placed
        associate: function(models) {
          profile.hasOne(models.messages);
        }
      },
      /*
      playbook.hasOne(MainClient, { 
          foreignKey: 'clientId' 
        });*/

    });
    return customPlaybook;
  };
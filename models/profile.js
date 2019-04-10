


module.exports = function(sequelize, DataTypes) {
    var profile = sequelize.define("profile", {
        //id is automatically created... it is also our primary key
      team: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      teamName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      customPlaybook: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      classMethods: { //this should be the foreignkey, if not, this is where the foreign key can be placed
        associate: function(models) {
          profile.hasOne(models.customPlaybook);
        }
      }
    });
    return profile;
  };
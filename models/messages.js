

module.exports = function(sequelize, DataTypes) {
    var messages = sequelize.define("messages", {
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: { //note: automatically created for every table
        type: DataTypes.STRING,
        allowNull: false
      }
      /*
      classMethods: { //this should be the foreignkey, if not, this is where the foreign key can be placed
        associate: function(models) {
          profile.hasOne(models.messages);
        }
      }*/
    });
    return messages;
  };
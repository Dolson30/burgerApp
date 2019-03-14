module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
      Name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1, 100]
          }
      },
      Eaten: {
          type: DataTypes.BOOLEAN,
          defaultValue: 0,
          allowNull: false
      }
  });

  return Burgers;
};
/* eslint-disable func-names */

module.exports = (sequelize, DataTypes) => {
  const cat = sequelize.define('cat', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
  }, {});
  cat.associate = function (models) {
    cat.belongsTo(models.owner, {
      foreignKey: {
        name: 'ownerId',
        allowNull: false,
      },
      as: 'cats',
    });
  };
  return cat;
};

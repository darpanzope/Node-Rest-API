/* eslint-disable func-names */

module.exports = (sequelize, DataTypes) => {
  const owner = sequelize.define('owner', {
    name: DataTypes.STRING,
  }, {});
  owner.associate = function (models) {
    owner.hasMany(models.cat, {
      foreignKey: {
        name: 'ownerId',
        allowNull: false,
      },
      as: 'cats',
    });
  };
  return owner;
};

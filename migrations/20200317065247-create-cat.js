/* eslint-disable no-unused-vars */

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('cats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isAlpha: true,
        },
        unique: true,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 100,
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      ownerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'owners',
          key: 'id',
          as: 'ownerId',
        },
      },
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('cats');
  },
};

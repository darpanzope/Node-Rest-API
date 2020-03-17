/* eslint-disable no-unused-vars */

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('cats', [{
    name: 'Kitty',
    age: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
    ownerId: 1,
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('cats', null, {}),
};

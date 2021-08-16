'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      Url: {
        type: Sequelize.STRING
      },
      Picture: {
        type: Sequelize.STRING
      },
      Startseselldate: {
        type: Sequelize.DATE
      },
      Startdatetime: {
        type: Sequelize.DATE
      },
      Category: {
        type: Sequelize.STRING
      },
      Genre: {
        type: Sequelize.STRING
      },
      City: {
        type: Sequelize.STRING
      },
      Countrycode: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Events');
  }
};
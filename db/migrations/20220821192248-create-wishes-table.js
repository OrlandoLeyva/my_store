'use strict';

const {wishSchema, WISH_TABLE } = require('../models/wish.model');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(WISH_TABLE, wishSchema);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

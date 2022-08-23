'use strict';

const {PRODUCT_TABLE, productSchema} = require('../models/product.model');
const {wishSchema, WISH_TABLE } = require('../models/wish.model');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PRODUCT_TABLE, productSchema);
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

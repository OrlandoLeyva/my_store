'use strict';

const {PRODUCT_TABLE, productSchema} = require('../models/product.model');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(PRODUCT_TABLE, 'updated_at' ,productSchema.updatedAt);
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

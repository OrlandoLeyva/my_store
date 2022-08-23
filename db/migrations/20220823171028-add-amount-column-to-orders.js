'use strict';

const {orderSchema, ORDER_TABLE } = require('../models/order.model');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(ORDER_TABLE, 'amount', orderSchema.amount);
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

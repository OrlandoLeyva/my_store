'use strict';

const {CATEGORY_TABLE, categorySchema} = require('../models/category.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(CATEGORY_TABLE, 'updated_at', categorySchema.updatedAt)
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

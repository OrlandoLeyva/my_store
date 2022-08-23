const {Sequelize, Model, DataTypes} = require('sequelize');

const CATEGORY_TABLE = 'categories';

const categorySchema = {
  id:{
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    type: DataTypes.INTEGER
  },
  name:{
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW()
  },
  updatedAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW()
  },
};

class Category extends Model{
  static associate(models){
    this.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'categoryId'
    })
  };

  static config(sequelize){
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      timesTamps: false,
      modelName: 'Category'
    }
  }
};

module.exports = {CATEGORY_TABLE, categorySchema, Category};

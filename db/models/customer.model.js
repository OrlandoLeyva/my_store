const {Sequelize, Model, DataTypes} = require('sequelize');
const {USER_TABLE} = require('./user.model');

const CUSTOMER_TABLE = 'customers';

const customerSchema = {
  id: {
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name'
  },
  phone: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    field: 'created_at',
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW()
  },
  updatedAt:{
    allowNull: false,
    field: 'updated_at',
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW()
  },
  userId:{
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'user_id',
    unique: true,
    references: {
      model:USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Customer extends Model {
  static associate(models){
    this.belongsTo(models.User, {as:'user'});
    this.hasMany(models.Order, {
      as: 'Orders',
      foreignKey: 'customerId'
    })
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timesTamps: false
    }
  }
}

module.exports = {CUSTOMER_TABLE, customerSchema, Customer};

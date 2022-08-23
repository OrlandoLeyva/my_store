const {Sequelize, Model, DataTypes} = require('sequelize');

const USER_TABLE = 'users';

const userSchema = {
  id: {
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email:{
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  password:{
    allowNull: false,
    type: DataTypes.STRING
  },
  role:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer'
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW()
  }
}

class User extends Model {
  static associate(models){
    this.hasOne(models.Customer, {
      'as': 'customer',
      'foreignKey': 'userId'
    })
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName:'User',
      timesTamps: false
    }
  }
}

module.exports = {USER_TABLE, userSchema, User};

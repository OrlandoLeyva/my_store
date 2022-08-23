const {Sequelize, Model, DataTypes} = require('sequelize');
const {ORDER_TABLE} = require('./order.model');
const {PRODUCT_TABLE} = require('./product.model');

const WISH_TABLE = 'wishes';

const wishSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},
	orderId: {
		field: 'order_id',
		allowNull: false,
		type: DataTypes.INTEGER,
		references: {
			model: ORDER_TABLE,
			key: 'id',
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL',
	},
  productId: {
		field: 'product_id',
		allowNull: false,
		type: DataTypes.INTEGER,
		references: {
			model: PRODUCT_TABLE,
			key: 'id',
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL',
	},
  amount:{
    allowNul: false,
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
};

class Wish extends Model {
	static associate(models){
    this.belongsTo(models.Order,{as:'order'});
    this.belongsTo(models.Product, {as: 'product'})
  }

	static config(sequelize) {
		return {
			sequelize,
			tableName: WISH_TABLE,
			modelName: 'Wish',
			timestamps: false,
		};
	}
}

module.exports = { Wish, wishSchema, WISH_TABLE };

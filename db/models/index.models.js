const {userSchema, User} = require('./user.model');
const {categorySchema, Category } = require('./category.model');
const {productSchema, Product} = require('./product.model');
const {customerSchema, Customer} = require('./customer.model');
const { orderSchema, Order} = require('./order.model');
const  {wishSchema, Wish } = require('./wish.model');

const setupModels = (sequelize)=>{
  User.init(userSchema, User.config(sequelize));
  Category.init(categorySchema, Category.config(sequelize));
  Product.init(productSchema, Product.config(sequelize));
  Customer.init(customerSchema, Customer.config(sequelize));
  Order.init(orderSchema, Order.config(sequelize));
  Wish.init(wishSchema, Wish.config(sequelize));

  //Associations
  Customer.associate(sequelize.models);
  User.associate(sequelize.models);
  Product.associate(sequelize.models);
  Category.associate(sequelize.models);
  Order.associate(sequelize.models);
  Wish.associate(sequelize.models);
}

module.exports = setupModels;

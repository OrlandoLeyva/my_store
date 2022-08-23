const Joi = require('joi');

const id = Joi.number().integer();
const status = Joi.string().valid('pending', 'on the way', 'delivered');
const amount = Joi.number().integer().min(1).max(10);

const wishes = Joi.array().items(Joi.object(
  {
    productId: id.required(),
    amount: amount.required()
  }
));


const createOrderSchema = Joi.object({
  customerId: id.required(),
  wishes: wishes.required(),
});

const updateOrderSchema = Joi.object({
  status: status.optional()
});

const getOrderSchema = Joi.object({
  id: id.required(),
});

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema }

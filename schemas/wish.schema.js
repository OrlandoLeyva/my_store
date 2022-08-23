const Joi = require('joi');

const id = Joi.number().integer();
const amount = Joi.number().integer().min(1).max(10);

const createWishSchema = Joi.object({
  orderId: id.required(),
  productId: id.required(),
  amount: amount.optional()
});

const updateWishSchema = Joi.object({
  productId: id.required()
});

const getWishSchema = Joi.object({
  id: id.required(),
});

module.exports = { createWishSchema, updateWishSchema, getWishSchema };

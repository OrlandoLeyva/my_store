const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);

const price = Joi.number().integer();
const price_min = Joi.number().integer();
const price_max = Joi.number().integer();

const description = Joi.string().max(150);
const offset = Joi.number().integer();
const limit = Joi.number().integer();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  categoryId: id.required()
});

const updateProductSchema = Joi.object({
  name: name.optional(),
  price: price.optional(),
  description: description.optional()
});

const getProductSchema = Joi.object({
  id: id.required(),
});

const queryProductSchema = Joi.object({
  offset: offset.optional(),
  limit: limit.optional(),
  price: price.optional(),
  price_min,
  price_max: price_max.when('price_min',{
    is: Joi.number().integer().required(),
    then: Joi.required()
  })
})

module.exports = { createProductSchema, updateProductSchema, getProductSchema, queryProductSchema }

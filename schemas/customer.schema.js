const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const phone = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(5);

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: name.required(),
  phone: phone.optional(),
  user:{
    email: email.required(),
    password: password.required()
  }
});

const updateCustomerSchema = Joi.object({
  name: name.optional(),
  lastName: name.optional(),
  phone: phone.optional()
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema };

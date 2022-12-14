const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(10)

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  role: role.optional()
});

const updateUserSchema = Joi.object({
  email: email.optional(),
  password: password.optional(),
  role: role.optional()
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }

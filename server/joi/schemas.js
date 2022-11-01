const joi = require("joi");

const menuItemSchema = joi.object({
  name: joi.string().required(),
  price: joi.number().required(),
  description: joi.string().required(),
  imageUri: joi.string().required(),
  category: joi.string().required(),
});

const smsMessageSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  phone: joi.string().required(),
  subject: joi.string().required(),
  message: joi.string().required(),
});

exports.menuItemSchema = menuItemSchema;
exports.smsMessageSchema = smsMessageSchema;

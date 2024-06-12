const Joi = require('joi');

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const craftsmanValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    specialization: Joi.string().required(),
    photo: Joi.string().uri().required(),
    serviceName: Joi.string().required(),
    city: Joi.string().required(),
    rating: Joi.number().optional(),
  });
  return schema.validate(data);
};

module.exports = { registerValidation, loginValidation, craftsmanValidation };

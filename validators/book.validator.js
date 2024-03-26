const Joi = require("joi");

const validateCreateBook = (book) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(512).required(),
    author: Joi.string().min(3).max(512),
    genre:  Joi.string().min(3).max(512),
    price:Joi.number()
  });
  return schema.validate(book);
};

const validateUpdateBook = (book) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(512),
    author: Joi.string().min(3).max(512),
    genre:  Joi.string().min(3).max(512),
    price:Joi.number()

  });
  return schema.validate(book);
};

module.exports = {
  validateCreateBook,
  validateUpdateBook,
};

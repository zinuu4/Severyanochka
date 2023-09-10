const Joi = require('joi');

const createCategory = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getCategories = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getCategory = {
  params: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const updateCategory = {
  params: Joi.object().keys({
    name: Joi.string().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const deleteCategory = {
  params: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};

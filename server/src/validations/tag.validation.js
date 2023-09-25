const Joi = require('joi');
const { objectId } = require('./custom.validation');

const getTagsByCategory = {
  query: Joi.object().keys({
    category: Joi.string().custom(objectId),
  }),
};

const createTag = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const updateTag = {
  params: Joi.object().keys({
    tagId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const deleteTag = {
  params: Joi.object().keys({
    tagId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  getTagsByCategory,
  createTag,
  updateTag,
  deleteTag,
};

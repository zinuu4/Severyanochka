const Joi = require('joi');
const { objectId } = require('./custom.validation');

const getTags = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
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
  getTags,
  createTag,
  updateTag,
  deleteTag,
};

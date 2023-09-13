const httpStatus = require('http-status');
const { Tag } = require('../models');
const ApiError = require('../utils/ApiError');

const queryTags = async (options) => {
  return await Tag.paginate({}, options);
};

const createTag = async (tagBody) => {
  return await Tag.create(tagBody);
};

const updateTag = async (tagId, updateBody) => {
  const tag = await Tag.findById(tagId);
  if (!tag) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Tag not found');
  }
  Object.assign(tag, updateBody);
  await tag.save();
  return tag;
};

const deleteTag = async (tagId) => {
  const tag = await Tag.findById(tagId);
  if (!tag) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Tag not found');
  }
  await tag.remove();
  return tag;
};

module.exports = {
  queryTags,
  createTag,
  updateTag,
  deleteTag,
};

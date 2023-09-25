const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { tagService } = require('../services');

const getTagsByCategory = catchAsync(async (req, res) => {
  const tags = await tagService.getTagsByCategory(req.query.category);
  res.status(httpStatus.FOUND).send(tags);
})

const createTag = catchAsync(async (req, res) => {
  const tag = await tagService.createTag(req.body);
  res.status(httpStatus.CREATED).send(tag);
});

const updateTag = catchAsync(async (req, res) => {
  const tag = await tagService.updateTag(req.params.tagId, req.body);
  res.status(httpStatus.OK).send(tag);
});

const deleteTag = catchAsync(async (req, res) => {
  const tag = await tagService.deleteTag(req.params.tagId);
  res.status(httpStatus.NO_CONTENT).send(tag);
});

module.exports = {
  // getTags,
  getTagsByCategory,
  createTag,
  updateTag,
  deleteTag,
};

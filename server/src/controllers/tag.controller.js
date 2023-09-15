const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { tagService } = require('../services');
const pick = require('../utils/pick');

const getTags = catchAsync(async (req, res) => {
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await tagService.queryTags(options);
  res.status(httpStatus.FOUND).send(result);
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
  getTags,
  createTag,
  updateTag,
  deleteTag,
};


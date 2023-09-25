const httpStatus = require('http-status');
const { Tag, Category, Product } = require('../models');
const ApiError = require('../utils/ApiError');

const getTagsByCategory = async (category) => {
  if (!Category.exists({_id: category})) {
    throw ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  const tags = await Product.aggregate([
    {
      $lookup: {
        from: 'categories',
        localField: 'category',
        foreignField: '_id',
        as: 'category',
        pipeline: [{
          '$match': {
            '$expr': {
              '$eq': ['$category._id', category]
            }
          }
        }]
      }
    },
    {
      $lookup: {
        from: 'tags',
        localField: 'tags',
        foreignField: '_id',
        as: 'tags',
      }
    },
    {
      $group: {
        _id: null,
        tags: {
          $accumulator:
          {
            init: function() { return [] },
            accumulate: function(state, tags) {
              tags.forEach(tag => {
                tag.id = tag._id;
                delete tag.__v;
                delete tag._id;
              })
              return Array.from(new Set([...state, ...tags]));
            },
            accumulateArgs: ["$tags"],
            merge: function(state1, state2) { return [...state1, ...state2] },
            finalize: function (state) { return state },
            lang: "js",
          }
        }
      }
    },
    {
      $project: {
        _id: 0,
        tags: 1,
      }
    }
  ]);

  const existingTags = [];
  const result = []
  for (const tag of tags[0].tags) {
    if (!existingTags.includes(tag.id.toString())) {
      result.push(tag);
      existingTags.push(tag.id.toString())
    }
  }
  return result;
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
  getTagsByCategory,
  createTag,
  updateTag,
  deleteTag,
};

const httpStatus = require('http-status');
const { Category } = require('../models');
const ApiError = require('../utils/ApiError');

const getCategoryByName = async (name) => {
  return Category.findOne({ name });
};

const createCategory = async (categoryBody) => {
  const isNameTaken = await getCategoryByName(categoryBody.name);
  if (isNameTaken) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Name already taken');
  }
  return Category.create(categoryBody);
};

const queryCategories = async (filter, options) => {
  const categories = await Category.paginate(filter, options);
  return categories;
};

const updateCategory = async (name, updateBody) => {
  const category = await getCategoryByName(name);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  Object.assign(category, updateBody);
  await category.save();
  return category;
};

const deleteCategory = async (name) => {
  const category = await getCategoryByName(name);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  await category.remove();
  return category;
};

module.exports = {
  createCategory,
  queryCategories,
  getCategoryByName,
  updateCategory,
  deleteCategory,
};

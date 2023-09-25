const httpStatus = require('http-status');
const { Category } = require('../models');
const ApiError = require('../utils/ApiError');

const getCategoryByName = async (name) => {
  return await Category.findOne({ name });
};

const createCategory = async (categoryBody) => {
  const isNameTaken = await getCategoryByName(categoryBody.name);
  if (isNameTaken) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Name already taken');
  }
  return Category.create(categoryBody);
};

const addSubCategory = async (categoryName, subCategoryName) => {
  const category = await getCategoryByName(categoryName);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  if (category.subCategories.includes(subCategoryName)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Subcategory already exists');
  }
  category.subCategories.push(subCategoryName);
  await category.save();
  return category;
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
  addSubCategory,
  queryCategories,
  getCategoryByName,
  updateCategory,
  deleteCategory,
};

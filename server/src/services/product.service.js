const httpStatus = require('http-status');
const { Product, Category } = require('../models');
const ApiError = require('../utils/ApiError');

const createProduct = async (productBody) => {
  const category = await Category.findById(productBody.category);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  if (category.subCategories.length > 0 && !category.subCategories.includes(productBody.subcategory)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Subcategory not found');
  }
  return await Product.create(productBody);
};

const queryProducts = async (filter, options) => {
  if ('tags' in filter) {
    filter = {...filter, 'tags': {$in: filter.tags}};
  }
  const products = await Product.paginate(filter, options);
  return products;
};

const getProductByArticle = async (article) => {
  return Product.findOne({ article });
};

const updateProduct = async (article, updateBody) => {
  const product = await getProductByArticle(article);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  Object.assign(product, updateBody);
  await product.save();
  return product;
};

const deleteProduct = async (article) => {
  const product = await getProductByArticle(article);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  await product.remove();
  return product;
};

module.exports = {
  createProduct,
  queryProducts,
  updateProduct,
  deleteProduct,
  getProductByArticle,
};

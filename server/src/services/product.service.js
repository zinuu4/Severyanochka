const httpStatus = require('http-status');
const { Product } = require('../models');
const ApiError = require('../utils/ApiError');

const createProduct = async (productBody) => {
  return Product.create(productBody);
};

const getAllProducts = async () => {
  return Product.find();
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
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductByArticle,
};

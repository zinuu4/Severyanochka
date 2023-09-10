const httpStatus = require('http-status');
const { Product, Category } = require('../models');
const ApiError = require('../utils/ApiError');

const createProduct = async (productBody) => {
  const category = await Category.findOne({ name: productBody.category });
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  const updatedProductBody = { ...productBody };
  updatedProductBody.category = category._id;
  return Product.create(updatedProductBody).then((product) => {
    return Product.populate(product, { path: 'category' });
  });
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

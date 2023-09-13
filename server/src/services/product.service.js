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
  return await Product.create(updatedProductBody).then(async (product) => {
    return await Product.populate(product, { path: 'category' });
  });
};

const getAllProducts = async () => {
  return await Product.find().lean();
};

const getProductByArticle = async (article) => {
  return await Product.findOne({ article }).lean();
};

const queryProducts = async (filter, options) => {
  return await Product.paginate(filter, options);
}

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
  queryProducts,
  updateProduct,
  deleteProduct,
  getProductByArticle,
};

const { Product } = require('../models');

const createProduct = async (productBody) => {
  return Product.create(productBody);
};

const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

const getProductById = async (productId) => {
  const product = await Product.findById(productId);
  return product;
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
};

const { Product } = require('../models');

const createProduct = async (productBody) => {
  return Product.create(productBody);
};

const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

module.exports = {
  createProduct,
  getAllProducts,
};

const { Product } = require('../models');

const createProduct = async (productBody) => {
  return Product.create(productBody);
};

module.exports = {
  createProduct,
};

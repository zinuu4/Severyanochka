const httpStatus = require('http-status');
const { Product, Category } = require('../models');
const ApiError = require('../utils/ApiError');

const createProduct = async (productBody) => {
  const category = await Category.findOne({ name: productBody.category });
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  if (category.subCategories.length > 0 && !category.subCategories.includes(productBody.subcategory)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Subcategory not found');
  }
  const updatedProductBody = { ...productBody };
  updatedProductBody.category = category._id;
  return Product.create(updatedProductBody).then((product) => {
    return Product.populate(product, { path: 'category' });
  });
};

const queryProducts = async (filter, options) => {
  if (filter.category) {
    const category = await Category.findOne({ name: filter.category });
    if (!category) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
    }
    filter.category = category._id;
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
  // If the category is being updated
  if (updateBody.category) {
    const category = await Category.findOne({ name: updateBody.category });
    if (!category) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
    }
    updateBody.category = category._id; // Replace category name with its ObjectId
  }

  // If the subCategory is being updated
  if (updateBody.subCategory) {
    const category = await Category.findById(product.category);
    if (!category || !category.subCategories.includes(updateBody.subCategory)) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Subcategory not found in the provided category');
    }
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

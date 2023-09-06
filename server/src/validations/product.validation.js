const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createProduct = {
  body: Joi.object().keys({
    article: Joi.number().required(),
    available: Joi.boolean().required(),
    name: Joi.string().required(),
    images: Joi.array()
      .items(
        Joi.object().keys({
          url: Joi.string().required(),
        })
      )
      .required(),
    price: Joi.number().required(),
    discounted: Joi.boolean(),
    discountPercentage: Joi.number(),
    discountedPrice: Joi.number(),
    bonusAmount: Joi.number(),
    category: Joi.string().required(),
    info: Joi.object()
      .keys({
        brand: Joi.string().required(),
        manufacturerCountry: Joi.string().required(),
        weight: Joi.string().required(),
      })
      .required(),
    reviews: Joi.array().items(
      Joi.object().keys({
        score: Joi.number().required(),
        text: Joi.string().required(),
        user: Joi.string().custom(objectId).required(),
      })
    ),
    reviewsSummary: Joi.object()
      .keys({
        totalReviewsQuantity: Joi.number().required(),
        finalEvaluation: Joi.number().required(),
        fivePointsQuantity: Joi.number().required(),
        fourPointsQuantity: Joi.number().required(),
        threePointsQuantity: Joi.number().required(),
        twoPointsQuantity: Joi.number().required(),
        onePointsQuantity: Joi.number().required(),
      })
      .required(),
  }),
};

const getProducts = {
  query: Joi.object().keys({
    name: Joi.string(),
    category: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getProduct = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
};

const updateProduct = {
  params: Joi.object().keys({
    productId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      article: Joi.number(),
      available: Joi.boolean(),
      name: Joi.string(),
      images: Joi.array().items(
        Joi.object().keys({
          url: Joi.string(),
        })
      ),
      price: Joi.number(),
      discounted: Joi.boolean(),
      discountPercentage: Joi.number(),
      discountedPrice: Joi.number(),
      bonusAmount: Joi.number(),
      category: Joi.string(),
      info: Joi.object().keys({
        brand: Joi.string(),
        manufacturerCountry: Joi.string(),
        weight: Joi.string(),
      }),
      reviews: Joi.array().items(
        Joi.object().keys({
          score: Joi.number(),
          text: Joi.string(),
          user: Joi.string().custom(objectId),
        })
      ),
      reviewsSummary: Joi.object().keys({
        totalReviewsQuantity: Joi.string(),
        finalEvaluation: Joi.string(),
        fivePointsQuantity: Joi.string(),
        fourPointsQuantity: Joi.string(),
        threePointsQuantity: Joi.string(),
        twoPointsQuantity: Joi.string(),
        onePointsQuantity: Joi.string(),
      }),
    })
    .min(1),
};

const deleteProduct = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};

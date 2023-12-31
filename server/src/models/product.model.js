const mongoose = require('mongoose');
const { paginate, toJSON } = require('./plugins');

const imageSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
});

const reviewSchema = mongoose.Schema(
  {
    score: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const reviewsSummarySchema = mongoose.Schema({
  totalReviewsQuantity: {
    type: Number,
    required: true,
  },
  finalEvaluation: {
    type: Number,
    required: true,
  },
  fivePointsQuantity: {
    type: Number,
    required: true,
  },
  fourPointsQuantity: {
    type: Number,
    required: true,
  },
  threePointsQuantity: {
    type: Number,
    required: true,
  },
  twoPointsQuantity: {
    type: Number,
    required: true,
  },
  onePointsQuantity: {
    type: Number,
    required: true,
  },
});

const infoSchema = mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  manufacturerCountry: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
});

const productSchema = mongoose.Schema(
  {
    article: {
      type: Number,
      required: true,
      unique: true,
      index: true,
      default: () => Math.floor(Math.random() * 900000 + 100000),
    },
    available: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    images: {
      type: [imageSchema],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discounted: {
      type: Boolean,
    },
    discountPercentage: {
      type: Number,
    },
    discountedPrice: {
      type: Number,
    },
    bonusAmount: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Category',
      required: true,
    },
    subCategory: {
      type: String,
      trim: true,
      minlength: 3,
    },
    info: {
      type: infoSchema,
      required: true,
    },
    reviews: {
      type: [reviewSchema],
      required: true,
    },
    reviewsSummary: {
      type: reviewsSummarySchema,
      required: true,
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
productSchema.plugin(toJSON);
productSchema.plugin(paginate);

/**
 * @typedef Product
 */
const Product = mongoose.model('Product', productSchema);

module.exports = Product;

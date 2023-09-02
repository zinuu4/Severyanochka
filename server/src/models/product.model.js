const mongoose = require('mongoose');
const { paginate, toJSON } = require('./plugins');

const productSchema = mongoose.Schema(
  {
    article: {
      type: Number,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    // images: {
    //   type: [imageSchema],
    //   required: true,
    // },
    price: {
      type: mongoose.SchemaTypes.Decimal128,
      required: true,
    },
    discounted: {
      type: Boolean,
    },
    discountPercentage: {
      type: Number,
    },
    discountedPrice: {
      type: mongoose.SchemaTypes.Decimal128,
    },
    bonusAmount: {
      type: Number,
      required: true,
    },
    // category: {
    //   type: categorySchema,
    //   required: true,
    // },
    info: {
      type: {
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
      },
      required: true,
    },
    // reviews: {
    //   type: [reviewSchema],
    //   required: true,
    // },
    reviewsSummary: {
      type: {
        totalReviewsQuantity: {
          type: Number,
          required: true,
        },
        averageRating: {
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
        onePointQuantity: {
          type: Number,
          required: true,
        },
      },
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

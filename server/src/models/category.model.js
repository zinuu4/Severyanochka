const mongoose = require('mongoose');
const { paginate, toJSON } = require('./plugins');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
    minlength: 3,
  },
  subCategories: [
    {
      type: String,
      trim: true,
      minlength: 3,
    },
  ],
});

// add plugin that converts mongoose to json
categorySchema.plugin(toJSON);
categorySchema.plugin(paginate);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

const mongoose = require('mongoose');
const { paginate, toJSON } = require('./plugins');

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
})

// add plugin that converts mongoose to json
tagSchema.plugin(toJSON);
tagSchema.plugin(paginate);

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;

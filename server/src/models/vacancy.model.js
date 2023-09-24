const mongoose = require('mongoose');

const { paginate, toJSON } = require('./plugins');

const vacancySchema = mongoose.Schema(
  {
    position: {
      type: String,
      required: true,
    },
    requirements: {
        type: String,
        required: true,
    }, 
    responsibilities: {
        type: String,
        required: true,
    },
    conditions: {
        type: String,
        required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }
)

// add plugin that converts mongoose to json
vacancySchema.plugin(toJSON);
vacancySchema.plugin(paginate);

const Vacancy = mongoose.model('Vacancy', vacancySchema);

module.exports = Vacancy;

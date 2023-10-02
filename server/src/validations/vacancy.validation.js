const Joi = require('joi');
const { objectId, phoneNumber } = require('./custom.validation');

const getVacancies = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const createVacancy = {
  body: Joi.object().keys({
    position: Joi.string().required(),
    requirements: Joi.string().required(),
    responsibilities: Joi.string().required(),
    conditions: Joi.string().required(),
    phoneNumber: Joi.string().required().custom(phoneNumber),
  }),
};

const getVacancy = {
  params: Joi.object().keys({
    vacancyId: Joi.string().custom(objectId),
  }),
};

const updateVacancy = {
  params: Joi.object().keys({
    vacancyId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    position: Joi.string().required(),
    requirements: Joi.string().required(),
    responsibilities: Joi.string().required(),
    conditions: Joi.string().required(),
    phoneNumber: Joi.string().required().custom(phoneNumber),
  }),
}

const deleteVacancy = {
  params: Joi.object().keys({
    vacancyId: Joi.string().custom(objectId),
  }),
}

module.exports = {
  getVacancies,
  getVacancy,
  createVacancy,
  updateVacancy,
  deleteVacancy,
}

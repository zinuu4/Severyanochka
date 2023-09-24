const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const { Vacancy } = require("../models");

const queryVacancies = async (options) => {
  return await Vacancy.paginate({}, options);
};

const getVacancy = async (vacancyId) => {
  return await Vacancy.findById(vacancyId);
};

const createVacancy = async (vacancyBody) => {
  return await Vacancy.create(vacancyBody);
};

const updateVacancy = async (vacancyId, vacancyBody) => {
  const vacancy = await Vacancy.findById(vacancyId);
  if (!vacancy) {
    throw ApiError(httpStatus.NOT_FOUND, 'Vacancy not found');
  }
  Object.assign(vacancy, vacancyBody);
  await vacancy.save();
  return vacancy;
};

const deleteVacancy = async (vacancyId) => {
  return await Vacancy.findByIdAndRemove(vacancyId);
}

module.exports = {
  queryVacancies,
  getVacancy,
  createVacancy,
  updateVacancy,
  deleteVacancy,
}

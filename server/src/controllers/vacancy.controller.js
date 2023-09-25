const httpStatus = require("http-status");

const catchAsync = require("../utils/catchAsync");
const pick = require('../utils/pick');
const { vacancyService } = require('../services');

const getVacancies = catchAsync(async (req, res) => {
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const vacancies = await vacancyService.queryVacancies(options);
  res.status(httpStatus.FOUND).send(vacancies);
});

const createVacancy = catchAsync(async (req, res) => {
  const vacancy = await vacancyService.createVacancy(req.body);
  res.status(httpStatus.CREATED).send(vacancy);
});

const getVacancy = catchAsync(async (req, res) => {
  const vacancy = await vacancyService.getVacancy(req.params.vacancyId);
  res.status(httpStatus.FOUND).send(vacancy);
});

const updateVacancy = catchAsync(async (req, res) => {
  const vacancy = await vacancyService.updateVacancy(req.params.vacancyId, req.body);
  res.status(httpStatus.OK).send(vacancy);
});

const deleteVacancy = catchAsync(async (req, res) => {
  const vacancy = await vacancyService.deleteVacancy(req.params.vacancyId);
  res.status(httpStatus.NO_CONTENT).send(vacancy);
});

module.exports = {
  getVacancies,
  getVacancy,
  createVacancy,
  updateVacancy,
  deleteVacancy,
};

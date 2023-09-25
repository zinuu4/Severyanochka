const express = require('express');
const validate = require('../../middlewares/validate');
const { vacancyController } = require('../../controllers');
const { vacancyValidation } = require('../../validations');

const router = express.Router();

router
  .route('/')
  .get(validate(vacancyValidation.getVacancies), vacancyController.getVacancies)
  .post(validate(vacancyValidation.createVacancy), vacancyController.createVacancy);

router
  .route('/:vacancyId')
  .get(validate(vacancyValidation.getVacancy), vacancyController.getVacancy)
  .patch(validate(vacancyValidation.updateVacancy), vacancyController.updateVacancy)
  .delete(validate(vacancyValidation.deleteVacancy), vacancyController.deleteVacancy);

module.exports = router;

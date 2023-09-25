const express = require('express');
const { tagController } = require('../../controllers');
const validate = require('../../middlewares/validate');
const { tagValidation } = require('../../validations');

const router = express.Router();

router
  .route('/')
  .get(validate(tagValidation.getTagsByCategory), tagController.getTagsByCategory)
  .post(validate(tagValidation.createTag), tagController.createTag);

router
  .route('/:tagId')
  .patch(validate(tagValidation.updateTag), tagController.updateTag)
  .delete(validate(tagValidation.deleteTag), tagController.deleteTag);

module.exports = router;

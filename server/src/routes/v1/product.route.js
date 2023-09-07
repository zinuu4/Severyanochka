const express = require('express');
const { productController } = require('../../controllers');

const router = express.Router();

router.route('/').post(productController.createProduct).get(productController.getAllProducts);

router
  .route('/:article')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;

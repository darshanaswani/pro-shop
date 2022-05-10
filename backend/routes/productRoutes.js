const express = require('express');
const {
  getProducts,
  getProductsById,
  deleteProduct,
  createProduct,
  updateProduct,
  createdProductReview,
} = require('../controllers/productControllers');
const { admin, protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);

router.route('/:id/reviews').post(protect, createdProductReview);

router
  .route('/:id')
  .get(getProductsById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

module.exports = router;

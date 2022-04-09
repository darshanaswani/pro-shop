const express = require('express');
const {
  getProducts,
  getProductsById,
} = require('../controllers/productControllers');

const router = express.Router();

router.get('/', getProducts);

router.get('/:id', getProductsById);

module.exports = router;

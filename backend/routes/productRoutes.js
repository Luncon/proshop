import express from 'express';
const router = express.Router();
import { getProducts, getProductById } from '../controllers/productController.js';
import checkObjectId from '../middleware/checkObjectId.js';
import { protect, admin } from '../middleware/authMiddleware.js'
import { createProduct } from '../controllers/productController.js';

router.route("/").get(getProducts).post(protect, admin, createProduct());
router.route('/:id').get(checkObjectId, getProductById);



export default router;

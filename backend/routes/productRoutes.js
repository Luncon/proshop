import express from 'express';
const router = express.Router();
import { getTopProducts, createProductReview, getProducts, getProductById, updateProduct, createProduct, deleteProduct} from '../controllers/productController.js';
import checkObjectId from '../middleware/checkObjectId.js';
import { protect, admin } from '../middleware/authMiddleware.js'

router.get('/top', getTopProducts)
router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(checkObjectId, getProductById).put(protect, admin, updateProduct).delete(protect, admin, deleteProduct);
router.route('/:id/reviews').post(protect, createProductReview)


export default router;

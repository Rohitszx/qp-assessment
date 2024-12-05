import express from 'express';
import { authenticate } from '../middlewares/authMiddleware';
import { getGroceries, createOrder } from '../controllers/userController';

const router = express.Router();

router.get('/groceries', authenticate, getGroceries);
router.post('/order', authenticate, createOrder);

export default router;

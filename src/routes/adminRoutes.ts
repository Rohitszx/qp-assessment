import express from 'express';
import {
  addGroceryItem,
  getGroceries,
  updateGroceryItem,
  deleteGroceryItem,
  updateInventoryLevel,
} from '../controllers/adminController';
import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/groceries', authenticate, authorizeAdmin, addGroceryItem);
router.get('/groceries', authenticate, authorizeAdmin, getGroceries);
router.put('/groceries/:id', authenticate, authorizeAdmin, updateGroceryItem);
router.delete('/groceries/:id', authenticate, authorizeAdmin, deleteGroceryItem);
router.put('/groceries/inventory/:id', authenticate, authorizeAdmin, updateInventoryLevel);

export default router;

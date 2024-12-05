import { Request, Response } from 'express';
import GroceryItem from '../models/GroceryItem';
import Order from '../models/Order';
import OrderItem from '../models/OrderItem';

export const getGroceries = async (req: Request, res: Response) => {
  try {
    const items = await GroceryItem.findAll();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching groceries' });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  const { userId, items } = req.body; 
  try {
    let totalPrice = 0;
    const order = await Order.create({ userId, totalPrice: 0, status: 'pending' });

    for (let item of items) {
      const groceryItem = await GroceryItem.findByPk(item.groceryItemId);
      if (groceryItem && groceryItem.stock >= item.quantity) {
        totalPrice += groceryItem.price * item.quantity;

        await OrderItem.create({
          orderId: order.id,
          groceryItemId: groceryItem.id,
          quantity: item.quantity,
          price: groceryItem.price,
        });

        groceryItem.stock -= item.quantity; 
        await groceryItem.save();
      } else {
        res.status(400).json({ message: 'Not enough stock for item ' + item.groceryItemId });
        return;
      }
    }

    order.totalPrice = totalPrice;
    await order.save();

    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

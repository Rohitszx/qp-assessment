import { Request, Response } from 'express';
import GroceryItem from '../models/GroceryItem';

export const addGroceryItem = async (req: Request, res: Response) => {
  const { name, price, stock } = req.body;
  try {
    const newItem = await GroceryItem.create({ name, price, stock });
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

export const getGroceries = async (req: Request, res: Response) => {
  try {
    const items = await GroceryItem.findAll();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching groceries' });
  }
};

export const updateGroceryItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;
  try {
    const item = await GroceryItem.findByPk(id);
    if (item) {
      item.name = name || item.name;
      item.price = price || item.price;
      item.stock = stock || item.stock;
      await item.save();
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

export const deleteGroceryItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const item = await GroceryItem.findByPk(id);
    if (item) {
      await item.destroy();
      res.status(200).json({ message: 'Item deleted' });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

export const updateInventoryLevel = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { stock } = req.body;
  try {
    const item = await GroceryItem.findByPk(id);
    if (item) {
      item.stock = stock;
      await item.save();
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

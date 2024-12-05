import { Request, Response } from 'express';
import bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken';
import User from '../models/User';

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("signup :",email,hashedPassword,role)
    const user = await User.create({
      email,
      password: hashedPassword,
      isAdmin: role === 'admin' ? true : false,
    });

    res.status(201).json({ message: 'User created successfully', userId: user.id });
  } catch (err) {
    console.error('Error creating user:', err);  
    res.status(500).json({ message: 'Error creating user', error: err });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email, isAdmin: user.isAdmin },
      process.env.JWT_SECRET || 'your-jwt-secret', 
      { expiresIn: '1h' }
    );
    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    console.error('Error logging in:', err);  
    res.status(500).json({ message: 'Error logging in', error: err });
  }
};

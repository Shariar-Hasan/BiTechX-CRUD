import express from 'express';
import User from '../model/user.model.js';

const router = express.Router();

// Create User
router.post('/', async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = await User.create({ username, password });
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read All Users
router.get('/', async (req, res) => {
  try {
    const userlist = await User.find();
    res.status(200).json({ userlist });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update User
router.put('/:username', async (req, res) => {
  const { username } = req.params;
  const { password } = req.body;
  try {
    const user = await User.findOneAndUpdate({ username }, { password }, { new: true });
    if (user) {
      res.status(200).json({ message: 'User updated successfully', user });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete User
router.delete('/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOneAndDelete({ username });
    if (user) {
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;


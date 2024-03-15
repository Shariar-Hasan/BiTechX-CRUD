import express from 'express';
import User from '../model/user.model.js';
import { createUser, deleteUser, getUser, updateUser } from '../controller/user.controller.js';

const router = express.Router();

// Create User
router.post('/', createUser);

// Read All Users
router.get('/', getUser);

// Update User
router.put('/:username', updateUser);

// Delete User
router.delete('/:username', deleteUser);

export default router;


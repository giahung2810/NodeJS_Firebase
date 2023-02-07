import express from 'express';

import {getAllCategories} from '../controllers/category/getCategories.js';
import { addCategory } from '../controllers/category/addCategory.js';


const router = express.Router();

// Categories
router.get('/get-categories', getAllCategories);
router.post('/add-category', addCategory);

export default router;
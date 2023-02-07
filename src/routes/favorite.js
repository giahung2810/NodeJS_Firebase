import express from 'express';

import {addFavorite} from '../controllers/favorite/addFavorite.js';
import { getFavorite_userID } from '../controllers/favorite/getFavorite.js';


const router = express.Router();

// Categories
router.get('/get-favorite-userID/:id', getFavorite_userID);
router.post('/add-favorite', addFavorite);

export default router;
import express from 'express';

import {addShoes} from '../controllers/shoes/addShoes.js';
import {deleteShoes} from '../controllers/shoes/deleteShoes.js';
import { updateShoes } from '../controllers/shoes/updateShoes.js';
import {getAllShoes, getAllShoes_limit, getShoes_categoryID, getShoes_id, getShoes_new, getShoes_popular, getShoes_popular_limit} from '../controllers/shoes/getShoes.js';

const router = express.Router();

//Products
router.get('/get-all-shoes', getAllShoes);
router.get('/get-all-shoes-limit', getAllShoes_limit);
router.get('/get-shoes/:id', getShoes_id);
router.get('/get-shoes-categoryID/:id', getShoes_categoryID);
router.get('/get-shoes-popular', getShoes_popular);
router.get('/get-shoes-popular-limit', getShoes_popular_limit);
router.get('/get-shoes-new', getShoes_new);

router.post('/add-shoes', addShoes);
router.delete('/delete-shoes/:id', deleteShoes);
router.put('/update-shoes/:id', updateShoes);

export default router;
import express from 'express';
import { addOrder } from '../controllers/order/addOrder.js';
import { deleteOrder } from '../controllers/order/deleteOrder.js';
import { getAllOrder, getOrder_id, getOrder_status_delivery_pending, getOrder_userID } from '../controllers/order/getOrder.js';


const router = express.Router();

// Categories
router.get('/get-all-order', getAllOrder);
router.get('/get-order/:id', getOrder_id);
router.get('/get-order-userid/:id', getOrder_userID);
router.get('/get-order-delivery-pending', getOrder_status_delivery_pending);

router.post('/add-order', addOrder);
router.delete('/delete-order/:id', deleteOrder);

export default router;
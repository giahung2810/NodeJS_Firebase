import {db} from '../../config/index.js';

export const deleteOrder = async (req, res) =>{
  const orderId = req.params.id;
    // console.log(orderId);
  try {
    const order = db.collection('orders').doc(orderId);

    await order.delete().catch((error) => {
      return res.status(400).json({
        status: 'error',
        message: error.message,
      });
    });

    return res.status(200).json({
      status: 'success',
      message: 'order deleted successfully',
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
import {db} from '../../config/index.js';

export const addOrder = async (req, res) =>{
  const {address, productsid, status, userid} = req.body;
  try {
    const order = db.collection('orders').doc();
    const orderObject = {
      id: order.id,
      address,
      productsid,
      status,
      userid,
    };

    order.set(orderObject);

    res.status(200).send({
      // status: 'success',
      // message: 'shoes added successfully',
      // data: 
      orderObject,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
}

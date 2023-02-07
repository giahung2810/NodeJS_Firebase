import {db} from '../../config/index.js';

export const getAllOrder = async (req, res) => {
  try {
    const allOrder = [];
    
    const query = await db.collection('orders').get();

    query.forEach( (doc) => allOrder.push({...doc.data(), id: doc.id}) );

    return res.status(200).json(allOrder);
  } catch (error) {
    return res.status(500).json(error.message); 
  }
};

export const getOrder_id = async (req, res) => {
  try {    
    const query = await db.collection('orders').doc(req.params.id).get();

    return res.status(200).json({...query.data(), id: query.id});
  } catch (error) {
    return res.status(500).json(error.message); 
  }
};

export const getOrder_userID = async (req, res) => {
  try {    
    // console.log(req.params.id)
    const result = [];
    const queryRef = db.collection('orders');
    const query = await queryRef.where('userid', '==', req.params.id).get();

    query.forEach( (doc) => result.push({...doc.data(), id: doc.id}) );
    return res.status(200).json(result);
} catch (error) {
  return res.status(500).json(error.message); 
}
};

export const getOrder_status_delivery_pending = async (req, res) => {
  try {    
    const orders = [];
    const queryRef = db.collection('orders');
    const query = await queryRef.where('status', 'in', ['delivering', 'pending']).get();

    query.forEach( (doc) => orders.push({...doc.data(), id: doc.id}) );
    // orders.forEach( (doc) =>  {console.log(doc.productsid)})
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json(error.message); 
  }
};
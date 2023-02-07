import {db} from '../../config/index.js';

export const addShoes = async (req, res) =>{
  const {name, prices, amount, info, categoryid, images, datecreate} = req.body;
  try {
    const shoes = db.collection('products').doc();
    const shoesObject = {
      id: shoes.id,
      name,
      prices,
      amount,
      info,
      categoryid,
      images,
      datecreate : datecreate,
    };

    shoes.set(shoesObject);

    res.status(200).send({
      // status: 'success',
      // message: 'shoes added successfully',
      // data: 
      shoesObject,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
}

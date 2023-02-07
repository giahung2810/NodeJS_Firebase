import {db} from '../../config/index.js';

export const updateShoes = async (req, res) => {
//   const {body: {name, prices, amount, info, categoryid, images, datecreate}, params: {shoesId}} = req.params;
console.log(req.params, req.body);
const {name, prices, amount, info, categoryid, images, datecreate} = req.body;
const id = req.params.id;
  try {
    const shoes = db.collection('products').doc(id);
    const currentData = (await shoes.get()).data() || {};
    const shoesObject = {
        id: id,
        name: name || currentData.name,
        prices: prices || currentData.prices,
        amount: amount || currentData.amount,
        info: info || currentData.info,
        categoryid: categoryid || currentData.categoryid,
        images: images || currentData.images,
        datecreate : datecreate || currentData.datecreate,
    };

    await shoes.set(shoesObject).catch((error) => {
      return res.status(400).json({
        status: 'error',
        message: error.message,
      });
    });

    return res.status(200).json({
      status: 'success',
      message: 'shoes updated successfully',
      data: shoesObject,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

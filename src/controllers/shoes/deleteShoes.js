import {db} from '../../config/index.js';

export const deleteShoes = async (req, res) =>{
  const shoesId = req.params.id;
    console.log(shoesId);
  try {
    const shoes = db.collection('products').doc(shoesId);

    await shoes.delete().catch((error) => {
      return res.status(400).json({
        status: 'error',
        message: error.message,
      });
    });

    return res.status(200).json({
      status: 'success',
      message: 'shoes deleted successfully',
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
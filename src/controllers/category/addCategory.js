import {db} from '../../config/index.js';

export const addCategory = async (req, res) =>{
  const {name} = req.body;
  try {
    const category = db.collection('category').doc();
    const categoryObject = {
      id: category.id,
      name,
    };

    category.set(categoryObject);

    res.status(200).send({
      // status: 'success',
      // message: 'category added successfully',
      // data: 
      categoryObject,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
}

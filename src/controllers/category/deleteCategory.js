import {db} from '../../config/index.js';

export const deleteCategory = async (req, res) =>{
  const categoryId = req.params.id;
    console.log(categoryId);
  try {
    const category = db.collection('category').doc(categoryId);

    await category.delete().catch((error) => {
      return res.status(400).json({
        status: 'error',
        message: error.message,
      });
    });

    return res.status(200).json({
      status: 'success',
      message: 'category deleted successfully',
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
import {db} from '../../config/index.js';

export const addFavorite = async (req, res) =>{
    const { productid, userid} = req.body;
    try {
      const favorite = db.collection('favorite').doc();
      const favoriteObject = {
        id: favorite.id,
        productid,
        userid,
      };
  
      favorite.set(favoriteObject);
  
      res.status(200).send({
        // status: 'success',
        // message: 'shoes added successfully',
        // data: 
        favoriteObject,
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
}
  
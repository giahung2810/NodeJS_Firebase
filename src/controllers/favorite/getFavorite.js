import {db} from '../../config/index.js';

export const getFavorite_userID = async (req, res) => {
    try {    
        // console.log(req.params.id)
        const result = [];
        const queryRef = db.collection('favorite');
        const query = await queryRef.where('userid', '==', req.params.id).get();

        query.forEach( (doc) => result.push({...doc.data(), id: doc.id}) );
        return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message); 
    }
};
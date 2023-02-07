import {db} from '../../config/index.js';

export const getAllCategories = async (req, res) => {
  try {
    const allEntries = [];
    
    const querySnapshot = await db.collection('category').get();

    querySnapshot.forEach( (doc) => allEntries.push({...doc.data(), id: doc.id}) );

    return res.status(200).json(allEntries);
  } catch (error) {
    return res.status(500).json(error.message); 
  }
};

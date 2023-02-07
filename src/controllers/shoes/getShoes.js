import {db} from '../../config/index.js';
import { get_day_between_2day } from '../../helper/index.js';

export const getAllShoes = async (req, res) => {
  try {
    const allEntries = [];
    
    const querySnapshot = await db.collection('products').get();

    querySnapshot.forEach( (doc) => allEntries.push({...doc.data(), id: doc.id}) );

    return res.status(200).json(allEntries);
  } catch (error) {
    return res.status(500).json(error.message); 
  }
};

export const getAllShoes_limit = async (req, res) => {
  try {
    const allEntries = [];
    
    const querySnapshot = await db.collection('products').orderBy('prices', 'desc').limit(5).get();

    querySnapshot.forEach( (doc) => allEntries.push({...doc.data(), id: doc.id}) );
    console.log(allEntries);
    return res.status(200).json(allEntries);
  } catch (error) {
    return res.status(500).json(error.message); 
  }
};

export const getShoes_id = async (req, res) => {
  try {    
    const querySnapshot = await db.collection('products').doc(req.params.id).get();

    return res.status(200).json({...querySnapshot.data(), id: querySnapshot.id});
  } catch (error) {
    return res.status(500).json(error.message); 
  }
};

export const getShoes_categoryID = async (req, res) => {
  try {
    // console.log(req.params.id);
    const shoes = [];

    const queryRef = db.collection('products');
    const query = await queryRef.where('categoryid', '==', req.params.id).get();

    query.forEach( (doc) => shoes.push({...doc.data(), id: doc.id}) );
    // console.log(shoes);
    return res.status(200).json(shoes);
  } catch (error) {
    return res.status(500).json(error.message); 
  }
}

export const getShoes_popular = async (req, res) => {
  try {
    const shoes = [];

    const queryRef = db.collection('products');
    const query = await queryRef.where('prices', '>', 200).orderBy('prices', 'desc').get();
    
    query.forEach( (doc) => shoes.push({...doc.data(), id: doc.id}) );
    console.log(shoes);
    return res.status(200).json(shoes);
  } catch (error) {
    return res.status(500).json(error.message); 
  }
}

export const getShoes_popular_limit = async (req, res) => {
  try {
    const shoes = [];

    const queryRef = db.collection('products');
    const query = await queryRef.where('prices', '>', 200).orderBy('prices', 'desc').limit(5).get();
    
    query.forEach( (doc) => shoes.push({...doc.data(), id: doc.id}) );
    console.log(shoes);
    return res.status(200).json(shoes);
  } catch (error) {
    return res.status(500).json(error.message); 
  }
}

export const getShoes_new = async (req, res) => {
  try {
    const shoes = [];

    const queryRef = await db.collection('products').get();
    queryRef.forEach((doc) => {
      const now = new Date();
      const datecreate = new Date(doc.data().datecreate);
      const day_dist = get_day_between_2day(datecreate, now);
      // console.log(day_dist);
      day_dist < 7 ?  shoes.push({...doc.data(), id: doc.id}) : null;
    })
    
    // query.forEach( (doc) => shoes.push({...doc.data(), id: doc.id}) );
    // console.log(shoes);

    return res.status(200).json(shoes);
  } catch (error) {
    return res.status(500).json(error.message); 
  }
}
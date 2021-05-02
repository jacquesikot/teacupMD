import firebase from '../firebase';

const db = firebase();

const getUserFavorites = async (user_id: String) => {
  const data: any = [];
  const querySnapshot = await db
    .collection('user_favorite')
    .where('user_id', '==', user_id)
    .get();
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return data;
};

interface FavoriteData {
  category: string[];
  details: string;
  images: string[];
  nutrition_details: string;
  price: string;
  product_id: string;
  sale_price: string;
  title: string;
  user_id: string;
}

const addToFavorites = async ({
  category,
  details,
  images,
  nutrition_details,
  price,
  product_id,
  sale_price,
  title,
  user_id,
}: FavoriteData) => {
  await db.collection('user_favorite').add({
    category,
    details,
    images,
    nutrition_details,
    price,
    product_id,
    sale_price,
    title,
    user_id,
  });
};

const deleteFavorite = async (favorite_id: string) => {
  await db.collection('uer_favorite').doc(favorite_id).delete();
};

export default {
  getUserFavorites,
  addToFavorites,
  deleteFavorite,
};

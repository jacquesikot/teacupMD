import firebase from '../firebase';

const db = firebase();

const getProducts = async (limit?: number) => {
  const data: any = [];
  const querySnapshot = await db
    .collection('products')
    .where('qty', '>=', '1')
    .limit(limit ? limit : 3000)
    .get();
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return data;
};

export default {
  getProducts,
};

import firebase from '../firebase';

const db = firebase();

const getProducts = async () => {
  const data: any = [];
  const querySnapshot = await db.collection('products').get();
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

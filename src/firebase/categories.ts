import firebase from '../firebase';

const db = firebase();

const getCategories = async () => {
  const data: any[] = [];
  const querySnapshot = await db.collection('categories').get();
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return data;
};

export default {
  getCategories,
};

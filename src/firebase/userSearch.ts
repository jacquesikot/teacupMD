import firebase from '../firebase';

const db = firebase();

const getRecentSearch = async (user_id: String) => {
  const data: any = [];
  const querySnapshot = await db
    .collection('user_search')
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

export default {
  getRecentSearch,
};

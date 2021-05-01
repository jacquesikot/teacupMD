import firebase from '../firebase';

const db = firebase();

const getDepartments = async () => {
  const data: any = [];
  const querySnapshot = await db.collection('departments').get();
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return data;
};

export default {
  getDepartments,
};

import firebase from '../firebase';

const db = firebase();

interface AddSearch {
  user_id: string;
  search_text: string;
  created_at: string;
}

const addRecentSearch = async ({
  user_id,
  search_text,
  created_at,
}: AddSearch) => {
  await db.collection('user_search').add({
    user_id,
    search_text,
    created_at,
  });
};

const getRecentSearch = async (user_id: String) => {
  const data: any = [];
  const querySnapshot = await db
    .collection('user_search')
    .where('user_id', '==', user_id)
    .limit(20)
    .get();
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return data;
};

const clearUserSearch = async (user_id: string) => {
  const result = await getRecentSearch(user_id);

  result.map(async (r: any) => {
    await db.collection('user_search').doc(r.id).delete();
  });
  return;
};

const checkSearch = async (user_id: string, search_text: string) => {
  const data: any = [];
  const querySnapshot = await db
    .collection('user_search')
    .where('user_id', '==', user_id)
    .where('search_text', '==', search_text)
    .limit(20)
    .get();
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  if (data.length < 1) {
    return false;
  } else {
    return true;
  }
};

export default {
  getRecentSearch,
  addRecentSearch,
  clearUserSearch,
  checkSearch,
};

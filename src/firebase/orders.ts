import firebase from '../firebase';

const db = firebase();

interface OrderProps {
  products: string[];
  total: string;
  user_id: string;
  hasPaid: boolean;
  payment_method: 'card' | 'cash';
}

const newOrder = async ({
  products,
  total,
  user_id,
  hasPaid,
  payment_method,
}: OrderProps) => {
  await db.collection('orders').add({
    created_at: new Date().toISOString(),
    products,
    total,
    user_id,
    hasPaid,
    payment_method,
  });
};

const userOrderCount = async (user_id: any) => {
  const data: any = [];
  const querySnapshot = await db
    .collection('orders')
    .where('user_id', '==', user_id)
    .get();
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return data.length;
};

export default {
  newOrder,
  userOrderCount,
};

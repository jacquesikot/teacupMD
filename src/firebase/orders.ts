import firebase from '../firebase';

const db = firebase();

interface OrderProps {
  products: any[];
  total: string;
  user_id: string;
  hasPaid: boolean;
  payment_method: 'card' | 'cash';
  address: string;
  name: string;
  email: string;
  delivered: boolean;
}

const newOrder = async ({
  products,
  total,
  user_id,
  name,
  email,
  hasPaid,
  payment_method,
  address,
  delivered,
}: OrderProps) => {
  await db.collection('orders').add({
    created_at: new Date().toISOString(),
    products,
    total,
    user_id,
    hasPaid,
    payment_method,
    address,
    name,
    email,
    delivered,
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

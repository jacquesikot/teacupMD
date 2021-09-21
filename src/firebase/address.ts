import { QueryFunctionContext } from 'react-query';
import firebase from '../firebase';

const db = firebase();

interface AddressProps {
  address: string;
  name: string;
  phone_number: string;
  user_id: string;
}

const getUserAddress = async (
  param: Partial<QueryFunctionContext<string[], any>>
) => {
  const data: any = [];
  const querySnapshot = await db
    .collection('user_address')
    .where('user_id', '==', param.pageParam)
    .get();
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return data;
};

const addUserAddress = async ({
  address,
  name,
  phone_number,
  user_id,
}: AddressProps) => {
  await db.collection('user_address').add({
    address,
    name,
    phone_number,
    user_id,
  });
};

const updatedUserAddress = async (
  { address, name, phone_number, user_id }: AddressProps,
  address_id: string
) => {
  await db.collection('user_address').doc(address_id).update({
    address,
    name,
    phone_number,
    user_id,
  });
};

const deleteUserAddress = async (address_id: string) => {
  await db.collection('user_address').doc(address_id).delete();
};

export default {
  getUserAddress,
  addUserAddress,
  updatedUserAddress,
  deleteUserAddress,
};

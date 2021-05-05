import firebase from '../firebase';

const db = firebase();

interface AddressProps {
  address: string;
  city: string;
  name: string;
  phone_number: string;
  state: string;
  user_id: string;
  zipcode: string;
}

const getUserAddress = async (user_id: string) => {
  const data: any = [];
  const querySnapshot = await db
    .collection('user_address')
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

const addUserAddress = async ({
  address,
  city,
  name,
  phone_number,
  state,
  user_id,
  zipcode,
}: AddressProps) => {
  await db.collection('user_address').add({
    address,
    city,
    name,
    phone_number,
    state,
    user_id,
    zipcode,
  });
};

const updatedUserAddress = async (
  { address, city, name, phone_number, state, user_id, zipcode }: AddressProps,
  address_id: string
) => {
  await db.collection('user_address').doc(address_id).update({
    address,
    city,
    name,
    phone_number,
    state,
    user_id,
    zipcode,
  });
};
export default {
  getUserAddress,
  addUserAddress,
  updatedUserAddress,
};

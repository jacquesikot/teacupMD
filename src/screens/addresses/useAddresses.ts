import { useState, useEffect } from 'react';
import * as yup from 'yup';
import Toast from 'react-native-toast-message';

import addressApi from '../../firebase/address';
import { useAppContext } from '../../context/context';

interface AddressProps {
  address: string;
  address2?: string;
  city: string;
  name: string;
  phone_number: string;
  state: string;
  user_id?: string;
  zipcode: string;
}

const useAddresses = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useAppContext();

  const [userAddress, setUserAddress] = useState<any>([]);

  useEffect(() => {
    getUserAddress();
  }, []);

  const getUserAddress = async () => {
    const address = await addressApi.getUserAddress(user.id);
    setUserAddress(address);
  };

  const addressSchema = yup.object().shape({
    address: yup.string().required(),
    address2: yup.string(),
    city: yup.string().required(),
    name: yup.string().required(),
    phone_number: yup.number().required(),
    state: yup.string().required(),
    zipcode: yup.string().required(),
  });

  const handleSubmit = async (values: AddressProps) => {
    try {
      setLoading(true);
      const address = await addressApi.getUserAddress(user.id);
      if (address.length > 0) {
        await addressApi.updatedUserAddress(
          {
            address: values.address.trim() + values.address2?.trim(),
            city: values.city,
            name: values.name.trim(),
            phone_number: values.phone_number.trim(),
            state: values.state.trim(),
            zipcode: values.zipcode.trim(),
            user_id: user.id.trim(),
          },
          address[0].id
        );
      } else {
        await addressApi.addUserAddress({
          address: values.address.trim() + values.address2?.trim(),
          city: values.city,
          name: values.name.trim(),
          phone_number: values.phone_number.trim(),
          state: values.state.trim(),
          zipcode: values.zipcode.trim(),
          user_id: user.id.trim(),
        });
      }
      getUserAddress();
      setLoading(false);
      Toast.show({
        type: 'success',
        visibilityTime: 7000,
        autoHide: true,
        text1: 'Address',
        text2: 'Address added succesfully',
      });
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      Toast.show({
        type: 'error',
        visibilityTime: 7000,
        autoHide: true,
        text1: 'Address Error',
        text2: 'Error adding address',
      });
    }
  };

  return {
    loading,
    addressSchema,
    handleSubmit,
    userAddress,
  };
};

export default useAddresses;

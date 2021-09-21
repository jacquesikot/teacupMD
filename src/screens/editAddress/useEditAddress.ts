import { useState, useEffect } from 'react';
import * as yup from 'yup';

import addressApi from '../../firebase/address';
import { useAppContext } from '../../context/context';

const useEditAddress = () => {
  const { user } = useAppContext();

  const [userAddress, setUserAddress] = useState<any>([]);

  useEffect(() => {
    getUserAddress();
  }, []);

  const getUserAddress = async () => {
    const address = await addressApi.getUserAddress({
      pageParam: user.id,
    });
    setUserAddress(address);
  };

  const addressSchema = yup.object().shape({
    address: yup.string().required(),
    address2: yup.string(),
    name: yup.string().required(),
    phone_number: yup.number().required(),
  });

  return {
    addressSchema,
    userAddress,
  };
};

export default useEditAddress;

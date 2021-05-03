import { useState } from 'react';
import * as yup from 'yup';
import Toast from 'react-native-toast-message';

import firebaseFunc from '../../firebase/auth';

interface RegisterProps {
  fullName: string;
  email: string;
  password: string;
}

const useRegister = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const registerSchema = yup.object().shape({
    fullName: yup.string().min(2).required(),
    email: yup.string().email().required(),
    phone: yup.string().min(10).required(),
    password: yup.string().required(),
  });

  const onSubmit = async (values: RegisterProps) => {
    try {
      setLoading(true);
      await firebaseFunc.registerUser(
        values.email,
        values.password,
        values.fullName
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Toast.show({
        type: 'error',
        visibilityTime: 7000,
        autoHide: true,
        text1: 'Sign up Error',
        text2: 'Error registering user',
      });
    }
  };

  return {
    registerSchema,
    onSubmit,
    loading,
  };
};

export default useRegister;

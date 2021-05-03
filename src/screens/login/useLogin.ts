import { useState } from 'react';
import * as yup from 'yup';
import Toast from 'react-native-toast-message';

import firebaseFunc from '../../firebase/auth';

interface LoginProps {
  email: string;
  password: string;
}

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const onSubmit = async (values: LoginProps) => {
    try {
      setLoading(true);
      await firebaseFunc.signInUser(values.email, values.password);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Toast.show({
        type: 'error',
        visibilityTime: 7000,
        autoHide: true,
        text1: 'Login Error',
        text2: 'Error loggin in',
      });
    }
  };

  return {
    loginSchema,
    onSubmit,
    loading,
  };
};

export default useLogin;

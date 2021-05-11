import * as yup from 'yup';

const useLogin = () => {
  const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  return {
    loginSchema,
  };
};

export default useLogin;

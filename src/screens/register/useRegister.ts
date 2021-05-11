import * as yup from 'yup';

const useRegister = () => {
  const registerSchema = yup.object().shape({
    fullName: yup.string().min(2).required(),
    email: yup.string().email().required(),
    phone: yup.string().min(10).required(),
    password: yup.string().required(),
  });

  return {
    registerSchema,
  };
};

export default useRegister;

import { useQuery } from 'react-query';

import productsApi from '../../firebase/products';
import queryKeys from '../../constants/queryKeys';

const useHome = () => {
  const {
    data: products,
    isLoading: loading,
    isError: error,
    refetch: refetchProducts,
  } = useQuery(queryKeys.AllProducts, () => productsApi.getProducts(), {
    refetchInterval: 300000,
  });

  return {
    products,
    loading,
    error,
    refetchProducts,
  };
};

export default useHome;

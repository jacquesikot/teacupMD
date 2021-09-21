import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import departmentApi from '../../firebase/departments';
import productsApi from '../../firebase/products';
import authApi from '../../firebase/auth';
import queryKeys from '../../constants/queryKeys';

const useHome = () => {
  const [departments, setDepartments] = useState<any>([]);
  const [displayName, setDisplayName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const { data: products } = useQuery(
    queryKeys.AllProducts,
    () => productsApi.getProducts(),
    {
      refetchInterval: 300000,
    }
  );

  const loadData = async () => {
    try {
      setLoading(true);
      const departments = await departmentApi.getDepartments();
      const user = await authApi.getUserDetails();
      setDepartments(departments);
      setDisplayName(user?.displayName ? user.displayName : '');
      setLoading(false);
      return;
    } catch (error) {
      return setError(true);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    products,
    departments,
    loading,
    error,
    displayName,
    showModal,
    setShowModal,
    loadData,
  };
};

export default useHome;

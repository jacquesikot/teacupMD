import React, { useEffect, useState } from 'react';

import departmentApi from '../../firebase/departments';
import productsApi from '../../firebase/products';
import authApi from '../../firebase/auth';

const useHome = () => {
  const [departments, setDepartments] = useState<any>([]);
  const [products, setProducts] = useState<any>([]);
  const [displayName, setDisplayName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const loadData = async () => {
    try {
      setLoading(true);
      const departments = await departmentApi.getDepartments();
      const products = await productsApi.getProducts(5);
      const user = await authApi.getUserDetails();
      setDepartments(departments);
      setProducts(products);
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

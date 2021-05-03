import React, { useEffect, useState } from 'react';

import departmentApi from '../../firebase/departments';
import productsApi from '../../firebase/products';

const useHome = () => {
  const [departments, setDepartments] = useState<any>([]);
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const loadData = async () => {
    try {
      setLoading(true);
      const departments = await departmentApi.getDepartments();
      const products = await productsApi.getProducts();
      setDepartments(departments);
      setProducts(products);
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
  };
};

export default useHome;

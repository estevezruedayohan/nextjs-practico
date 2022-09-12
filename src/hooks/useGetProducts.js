import { useEffect, useState } from 'react';
import Axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  // instalamos axios previamente para manejo de url
  // useEffect(async () => {
  //   const response = await Axios(API);
  //   setProducts(response.data);
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await Axios(API);
      setProducts(response.data);
    }
    fetchData();
  }, [API]);

  return products;
};

export default useGetProducts;

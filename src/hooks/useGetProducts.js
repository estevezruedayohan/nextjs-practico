import { useEffect, useState } from "react";
import Axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  // instalamos axios previamente para manejo de url
  // useEffect(async () => {
  //   const response = await Axios(API);
  //   setProducts(response.data);
  // }, []);
  
  useEffect(() => {
    (async () => {
        const response = await Axios(API);	  
        setProducts(response.data);
    })();
  }, []);
  return products;
};



export default useGetProducts;
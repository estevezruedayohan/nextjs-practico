import { useState } from 'react';

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state, // traer lo que contenga la variable state que
      // cargada con el valor del initialState, puede ser solo cart
      // pero puede ser otros valores como comprador, etc
      cart: [...state.cart, payload], // Le decimos a cart [mantener lo que hay presente,
      // agrega lo que le voy a pasar]
    });
  };

  const removeFromCart = (keyIndex) => {
    const newCart = state.cart;
    newCart.splice(keyIndex, 1);

    setState({
      ...state,
      cart: newCart,
    });
  };

  return {
    state, // para que lo puedan conocer todos
    addToCart, // retorna la función la cual puede ser accedida como método en este hooks
    removeFromCart,
  };
};

export default useInitialState;

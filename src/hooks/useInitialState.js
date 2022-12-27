import { useState } from 'react';
import initialState from '../initialState';
import initialStateGoogleAddress from '../initialStateGoogleAddress';

const useInitialState = () => {

  const [state, setState] = useState(initialState);
  const [stateGoogle, setStateGoogle] = useState(initialStateGoogleAddress);

  const addToCart = payload => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  }

  const removeFromCart = (payload,indexToRemove) => {
    setState({
      ...state,
      cart: state.cart.filter((_items,indexCurrent) => indexCurrent !== indexToRemove),
    });
  };

  const addToBuyer = payload => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }
  const addNewOrder = payload => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    })
  }
  const removeAllFromCart = () => {
    setState({
      ...state,
      cart: [],
    });
  }

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    removeAllFromCart,
    state,
    stateGoogle
  };
};

export default useInitialState;
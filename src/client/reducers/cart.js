/* Reducer for shopping cart */

import { ActionTypes } from "../actions";

const addToCart = (state, action) => {
  if (state.filter(product => product.id == action.id).length > 0) {
    return state;
  } else {
    const product = {
      id: action.id,
      name: action.name,
      description: action.description,
      price: action.price / 100,
      imageURL: action.imageURL,
      quantity: 1
    };
    return [...state, product];
  }
};

const removeFromCart = (state, action) => {
  action.products.forEach(p => {
    state = state.filter(product => product.id !== p[0].id);
  });

  return state;
};

const cart = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return addToCart(state, action);
    case ActionTypes.REMOVE_FROM_CART:
      return removeFromCart(state, action);
    default:
      return state;
  }
};

export default cart;

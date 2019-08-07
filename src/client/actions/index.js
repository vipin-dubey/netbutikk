// Home of redux actions and operations
export const ActionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  SHOW_TOAST_NOTIFICIATION: "SHOW_TOAST_NOTIFICIATION",
  HIDE_TOAST_NOTIFICIATION: "HIDE_TOAST_NOTIFICIATION"
};

export const OperationTypes = {
  ADD: "ADD",
  REMOVE: "REMOVE"
};

export const addToCart = product => ({
  type: ActionTypes.ADD_TO_CART,
  id: product.id,
  name: product.name,
  description: product.description,
  price: product.price,
  imageURL: product.imageURL
});

export const removeFromCart = products => ({
  type: ActionTypes.REMOVE_FROM_CART,
  products
});

export const hideToastNotification = () => ({
  type: ActionTypes.HIDE_TOAST_NOTIFICIATION
});

export const showToastNotification = data => ({
  type: ActionTypes.SHOW_TOAST_NOTIFICIATION,
  data
});

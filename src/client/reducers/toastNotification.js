/* Reducer for Toast Notifications */
import { ActionTypes, OperationTypes } from "../actions";

const initialState = {
  kind: undefined,
  title: undefined,
  subtitle: undefined,
  caption: undefined,
  timeout: 0,
  style: undefined
};

/* Helper method to show toast notifications based on operations defined in OperationTypes */
function showToastMessageBasedOnOperation(state, action) {
  const operation = action.data.operation;
  switch (operation) {
    case OperationTypes.ADD:
      return {
        kind: "success",
        title: "Product " + action.data.name + " was added to cart",
        subtitle: "",
        timeout: 2000
      };
    case OperationTypes.REMOVE:
      return {
        kind: "success",
        title: "Product " + action.data.name + " was remove to cart",
        subtitle: "",
        timeout: 2000
      };
    default:
      return {
        kind: undefined,
        title: undefined,
        subtitle: undefined,
        timeout: 0
      };
  }
}

/* Defines toastNotification reducer, called using dispatch from components, uses ActionTypes to perform appropriate actions */
const toastNotification = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.HIDE_TOAST_NOTIFICIATION:
      return initialState;
    case ActionTypes.SHOW_TOAST_NOTIFICIATION:
      return showToastMessageBasedOnOperation(state, action);
    default:
      return state;
  }
};

export default toastNotification;

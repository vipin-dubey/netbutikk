/* Combine all Reducers into one and export for use in application */
import { combineReducers } from "redux";
import cart from "./cart";
import toastNotification from "./toastNotification";

export default combineReducers({
  cart,
  toastNotification
});

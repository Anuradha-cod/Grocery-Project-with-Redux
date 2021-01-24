import { combineReducers } from "redux";
import auth from "./auth";
import categories from "./categories";
import products from "./products";
import alert from "./alert";

export default combineReducers({
  auth,
  categories,
  products,
  alert,
});

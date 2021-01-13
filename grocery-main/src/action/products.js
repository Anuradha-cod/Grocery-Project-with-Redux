import axios from "axios";
import { GET_PRODUCT } from "./types";

export const loadproduct = () => async (dispatch) => {
  const res = await axios.get(
    "https://powerful-dawn-74322.herokuapp.com/api/product"
  );
  dispatch({ type: GET_PRODUCT, payload: res.data });
};

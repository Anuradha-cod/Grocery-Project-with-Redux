import {
  GET_USERS,
  REGISTER_SUCCES,
  REGISTER_FAIL,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  ERROR,
  LOGOUT,
} from "./types";
import axios from "axios";
import setAuthToken from "../utility/setAuthToken";

const loadUsers = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(
      "https://powerful-dawn-74322.herokuapp.com/api/auth"
    );
    dispatch({ type: GET_USERS,payload: res.data});
  } catch (error){
      dispatch({type:ERROR})
  }
};

import { SET_ALERT, REMOVE_ALERT } from "./types";

import { v4 as uuidv4 } from "uuid";

export const setAlert = (message, alertType, timeOut = 50000) => (dispatch) => {
  const id = uuidv4();
  // console.log(id);

  // console.log(message);
  dispatch({ type: SET_ALERT, payload: { message, alertType, id } });
  setTimeout(() => {
    dispatch({ type: REMOVE_ALERT, payload: id });
  }, timeOut);
};

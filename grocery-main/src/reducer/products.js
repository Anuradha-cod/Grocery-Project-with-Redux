import {GET_PRODUCT} from '../action/types';

const initialState = {
    product: [],
  };
  
  export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_PRODUCT:
        return { ...state, product: payload };
  
      default:
        return { ...state };
    }
  };
  
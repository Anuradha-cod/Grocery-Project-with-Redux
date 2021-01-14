import {
  GET_PRODUCT,
  INCREMENT_COUNT,
  DECEREMENT_COUNT,
  SELECT_PRODUCT,
} from "../action/types";

const initialState = {
  product: [],
  updatedProduct: [],
  selectedProduct: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT:
      return { ...state, product: payload, updatedProduct: payload,  };

      case  SELECT_PRODUCT:
        return { ...state,  selectedProduct: payload  };

    case INCREMENT_COUNT:
      const id = payload.id;
      const index = state.updatedProduct.findIndex((ele) => ele._id === id);
      const item = state.updatedProduct[index];
      !item.count ? (item.count = 1) : (item.count = item.count + 1);

      const newUpdatedProduct = [...state.updatedProduct];
      newUpdatedProduct[index] = item;
      return { ...state, updatedProduct: newUpdatedProduct };

      // case DECEREMENT_COUNT:
      //   const id = payload.id;
      //   const index = state.updatedProduct.findIndex(
      //     (value) => value._id === id
      //   );
      //   const item = state.updatedProduct[index];
      //   if (item.count >= 1) {
      //     item.count = item.count - 1;
      //   } else {
      //     item.count = undefined;
      //   }
      //   const newUpdatedProduct = [...state.updatedProduct];
      //   newUpdatedProduct[index] = item;
      //   return { ...state, updatedProduct: newUpdatedProduct };


    default:
      return { ...state };
  }
};

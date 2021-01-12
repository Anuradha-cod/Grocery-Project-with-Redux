import React, { Children, Component, useContext } from "react";
import Api from "./Link";

export const AppContext = React.createContext();
const initialState = {
  user: {},
  category: [],
  updatedCategory: [],
  cart: [],
  products: [],
  updatedProducts: [],
  count: 0,
  total: 0,
  selectedProduct: {},
  item: "",
};

export class ContextApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      getCategory: async () => {
        let res = await Api.get("/api/category");
        this.setState({ category: [...res], updatedCategory: [...res] });
      },

      getProduct: async () => {
        let res = await Api.get("/api/product");
        this.setState({ products: [...res], updatedProducts: [...res] });
      },
      setSelectedProduct: async (props) => {
        this.setState({ selectedProduct: { ...props } });
      },

      incrementItem: async (id) => {
        const index = this.state.updatedProducts.findIndex(
          (ele) => ele._id === id
        );
        const item = this.state.updatedProducts[index];
        !item.count ? (item.count = 1) : (item.count = item.count + 1);

        const newUpdatedProducts = [...this.state.updatedProducts];
        newUpdatedProducts[index] = item;
        this.state.setSelectedProduct(newUpdatedProducts);
      },

      decrementItem: async (id, ) => {
        const index = this.state.updatedProducts.findIndex(
          (value) => value._id === id
        );
        const item = this.state.updatedProducts[index];
        if (item.count >= 1) {
          item.count = item.count - 1;
        } else {
          item.count = undefined;
        }
        const newUpdatedProducts = [...this.state.updatedProducts];
        newUpdatedProducts[index] = item;
        this.state.setSelectedProduct(newUpdatedProducts);
      },
    };
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export const AppConsumer = AppContext.Consumer;

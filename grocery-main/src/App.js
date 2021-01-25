import react, { useEffect } from "react";
import "./App.css";

import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import MainRouter from "./router2/MainRouter";
import { connect } from "react-redux";
import { loadUsers } from "./action/auth";
import store from "./store";
import setAuthToken from "./utility/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUsers());
  });
  return (
    <div className="App">
      <MainRouter />
      <Footer />
    </div>
  );
};

export default App;

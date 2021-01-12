import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
// import "./App.css";
import { AppConsumer } from "../utility/ContextApi";
import Home from "../component/Router/Home";
import Dashboard from "../component/Router/Dashboard";
import LoginCust from "../component/Router/LoginCust";
import Register from "../component/Router/Register";
import Header from "../component/header/Header";
import SeeAllProduc from "../component/Router/SeeAllProduc";

const MainRouter = () => {
  return (
    // <AppConsumer>
    // {(context) => (

    <>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        {/* <Route path="/dashboard" component={() => <Dashboard />} />
        <Route path="/register" component={() => <Register />} />
        <Route path="/login" component={() => <LoginCust />} />
        <Route path="/seeAllProduc" component={() => <SeeAllProduc />} /> */}
      </Switch>
    </>
    // )}
    // </AppConsumer>
  );
};

export default MainRouter;

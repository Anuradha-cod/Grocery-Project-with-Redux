import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import "./App.css";
import { AppConsumer } from "../utility/ContextApi";
import Home from "../component/Router/Home";
import Dashboard from "../component/Router/Dashboard";
import LoginCust from "../component/Router/LoginCust";
import Register from "../component/Router/Register";
import Header from "../component/header/Header";
import SeeAllProduc from "../component/Router/SeeAllProduc";
import AlertComponent from "../alert/alertComponent";
import { connect } from "react-redux";
import PaymentCheckOut from "../component/Router/PaymentCheckOut";
import PrivatRouter from "./PrivatRouter";
import OfferSection from "../component/offer-section/OfferSection";

const MainRouter = ({ alerts }) => {
  return (
    <>
      <Header />
      {alerts.length > 0 && <AlertComponent />}
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/dashboard" component={() => <Dashboard />} />
        <Route path="/register" component={() => <Register />} />
        <Route path="/login" component={() => <LoginCust />} />
        <Route path="/seeAllProduc" component={() => <SeeAllProduc />} />
        <Route path="/category" component={() => <OfferSection />} />
        <PrivatRouter
          path="/paymentCheckOut"
          component={() => <PaymentCheckOut />}
        />
      </Switch>
    </>
    // )}
    // </AppConsumer>
  );
};
const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps, null)(MainRouter);

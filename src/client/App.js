/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
/*
  The application is divided into three main parts :
  1. AppHeader (contains Logo, Search, TopNavigation, DrawerNavigation, ShoppingCart and Notifications)
  2. Content Area (Side Navigation (desktops only) & Main Page content )
  3. Footer Area
  4. Toast Notification (Can be initiated using Redux actions from any component for success / errors) 

  Author : Vipin Dubey (er.vipindubey@gmail.com)
*/

/* Import libraries */
import { connect } from "react-redux";
/* Import App components */
import AppHeader from "./components/Header/AppHeader";
import ProductList from "./components/ProductList/ProductList";
import ToastNotification from "./components/Notification/ToastNotification";
import AppFooter from "./components/Footer/AppFooter";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <ProductList />
        <AppFooter />
        <ToastNotification />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  toastNotification: state.toastNotification
});

export default connect(
  mapStateToProps,
  null
)(App);

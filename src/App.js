import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./component/header/header";
import SignUp from './container/Sign-Up-In/SignUp'
import SignIn from './container/Sign-Up-In/SignIn'
import PrivateRoute from "./component/PrivateRoute";
import HomePage from "./container/HomePage/home";
import StorePage from "./container/StorePage/Store";
import CartPage from "./container/cartPage/cart";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
      <PrivateRoute exact path="/" component={HomePage}/>
        <PrivateRoute exact path="/store" component={StorePage}/>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </>
  );
};

export default App;

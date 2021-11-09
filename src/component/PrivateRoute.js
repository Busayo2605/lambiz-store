import React from "react";
import { Route, Redirect } from "react-router";
import { StoreState } from "../context/context";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = StoreState();
  return <Route
  {...rest}
  render={routeprops => currentUser?(
    <Component {...routeprops}/>
  ):(
    <Redirect to={'/sign-in'}/>
  )}
   />;
};

export default PrivateRoute;

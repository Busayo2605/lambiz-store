import { Route, Redirect } from "react-router";
import { StoreState } from "../context/context";

const PrivateRoute = ({ component: Component, ...rest }) => {
  
  const {currentUser} = StoreState()
  // console.log(currentUser)
  return (
    <Route
      {...rest}
      render={(props) =>
        (currentUser ? <Component {...props} /> : <Redirect to={"/sign-in"} />)
      }
    />
  );
};

export default PrivateRoute;

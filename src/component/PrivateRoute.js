import { Route, Redirect } from "react-router";
import { auth } from "../firebase";

const PrivateRoute = ({ component: Component, ...rest }) => {
  
  // console.log(currentUser)
  const user = auth.currentUser

  return (
    <Route
      {...rest}
      render={(props) =>
        (user ? <Component {...props} /> : <Redirect to={"/sign-in"} />)
      }
    />
  );
};

export default PrivateRoute;

import { onAuthStateChanged } from "firebase/auth";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import StoreReducer from "./reducer";
import { auth } from "../firebase";

const Context = createContext();

const StoreContext = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(null);
  const [state, dispatch] = useReducer(StoreReducer, {
    cartItem:JSON.parse(localStorage.getItem('cart')) || [],
  });
  const [error, seterror] = useState("");
  const [Total, setTotal] = useState();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cartItem));
  }, [state.cartItem]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setcurrentUser(user);
        // console.log(user)
      } else {
        setcurrentUser(null);
      }
    });
  }, []);

  useEffect(() => {
    setTotal(
      state.cartItem.reduce(
        (acc, curr) => acc + Number(curr.price) * curr.qty,
        0
      )
    );
  }, [state.cartItem]);

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        currentUser,
        Total,
        setcurrentUser,
        error,
        seterror,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const StoreState = () => {
  return useContext(Context);
};
export default StoreContext;

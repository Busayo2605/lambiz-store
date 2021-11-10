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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cartItem));
  }, [state.cartItem]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
     
      if (user) {
        setcurrentUser(user);
      } else {
        setcurrentUser(null);
      }
    });
  }, [state]);

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
        loading,
        setLoading,
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

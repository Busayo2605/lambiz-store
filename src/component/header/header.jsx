import { signOut } from "firebase/auth";
import { Badge } from "react-bootstrap";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import { StoreState } from "../../context/context";
import { auth } from "../../firebase";
import { CartBtn, Navbar } from "../style";

const Header = () => {
  const {
    currentUser,
    state: { cartItem, seterror },
  } = StoreState();

  const history = useHistory();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        seterror(true);
        setTimeout(() => {
          seterror(false);
        }, 2000);
      });
  };
  return (
    <Navbar>
      <Link to="/" className="brand-link">
        LAMBIZ STORE
      </Link>

      <>
        {currentUser === null ? (
          <Link to="/sign-in" className="register-btn">
            <BiLogIn />
          </Link>
        ) : (
          <div className="register-details">
            <CartBtn>
              <Link to="/cart" className="cart">
                <FiShoppingCart className="cart-icon" />
                <Badge className="badge">{cartItem.length}</Badge>
              </Link>
            </CartBtn>
            <Link to='my-order'>Order History</Link>
            <div className="register-btn">
              <BiLogOut onClick={handleSignOut} />
            </div>
          </div>
        )}
      </>
    </Navbar>
  );
};

export default Header;

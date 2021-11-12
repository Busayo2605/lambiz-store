import { signOut } from "firebase/auth";
import { Badge } from "react-bootstrap";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHistory } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import { StoreState } from "../../context/context";
import { auth } from "../../firebase";
import { Navbar } from "../style";

const Header = () => {
  const {
    currentUser,
    state: { cartItem,myOrder, seterror },
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
          <Link to="/sign-in" className="cart-icon">
            <BiLogIn />
          </Link>
        ) : (
          <div className="register-details">
            <div className='cartbtn'>
              <Link to="/cart" className="cart">
                <FiShoppingCart className="cart-icon" />
                <Badge className="badge">{cartItem.length}</Badge>
              </Link>
            </div>
            <div>
              <Link to="my-order">
                <AiOutlineHistory className="history" />
                <Badge className="badge">{myOrder.length}</Badge>
              </Link>
            </div>
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

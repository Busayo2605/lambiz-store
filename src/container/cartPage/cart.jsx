import { Container } from "react-bootstrap";
import { Title } from "../../component/style";
import { StoreState } from "../../context/context";
import CartTable from "../../component/Cart/CartTable";
import CartDetails from '../../component/Cart/CartDetails'

const CartPage = () => {
  const {
    state: { cartItem },
  } = StoreState();

  return (
    <Container>
      {cartItem.length > 0 ? (
        <div className="p-5">
          <div>
            {cartItem.map((item) => {
              return <CartTable item={item} />;
            })}
          </div>
          <CartDetails />
        </div>
      ) : (
        <div className="empty-body">
          <Title>Your Cart is Empty</Title>
        </div>
      )}
    </Container>
  );
};

export default CartPage;
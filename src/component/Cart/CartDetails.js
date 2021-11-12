import { useHistory } from "react-router";
import StripeCheckout from "react-stripe-checkout";
import { StoreState } from "../../context/context";
import { RemoveBtn, Title } from "../style";

const CartDetails = ({ item }) => {
  const { Total, dispatch, setStatus } = StoreState();

  const history = useHistory();
  const onToken = (token) => {
    try {
      fetch("/save-stripe-token", {
        method: "POST",
        body: JSON.stringify(token),
      }).then((response) => {
        response.json().then((data) => {
          console.log(`We are in business, ${data.email}`);
        });
      });
      dispatch({
        type: "ADD_TO_ORDER",
        payload: item,
      });
      setStatus("SUCCESS");
      history.push("/store");
    } catch (error) {
      dispatch({
        type: "ADD_TO_ORDER",
        payload: item,
      });
      setStatus("FAILED");
      history.push("/store");
    }
  };

  return (
    <div className="cart-details-container">
      <Title>Total: $ {Math.round(Total)}</Title>
      <div className="details-btn">
        <StripeCheckout
          name="Lambiz Store"
          token={onToken}
          currency="USD"
          amount={Math.round(Total) * 100}
          stripeKey="pk_test_51HPNYdLVxHXfNXqKFvaPbSVxUR2RRqM7SiQvtOV473cKvhEn8Z43hz4bLmj8iegOMls6HPkzDjWGtdaBcN1EB4Q800BDwWVR5z"
          allowRememberMe
        >
          <button className="btn btn-primary">PAY WITH CARD</button>
        </StripeCheckout>
        <RemoveBtn
          onClick={() =>
            dispatch({
              type: "CLEAR_CART",
            })
          }
        >
          CLEAR-CART
        </RemoveBtn>
      </div>
    </div>
  );
};

export default CartDetails;

import React from "react";
import { useHistory } from "react-router";
import StripeCheckout from "react-stripe-checkout";
import { StoreState } from "../../context/context";
import { RemoveBtn, Title } from "../style";

const CartDetails = () => {
  const { Total, dispatch } = StoreState();
  const history = useHistory();
  const onToken = (token) => {
    dispatch({
      type: "CLEAR_CART",
    });
    console.log(token);
    history.push("/store");
  };
  return (
    <div>
      <Title>Total: $ {Math.round(Total)}</Title>
      <StripeCheckout
        name="Lambiz Store"
        token={onToken}
        currency="usd"
        amount={Math.round(Total) * 100}
        stripeKey="pk_test_51HPNYdLVxHXfNXqKFvaPbSVxUR2RRqM7SiQvtOV473cKvhEn8Z43hz4bLmj8iegOMls6HPkzDjWGtdaBcN1EB4Q800BDwWVR5z"
      />
      <RemoveBtn
        style={{ marginLeft: "20px" }}
        onClick={() =>
          dispatch({
            type: "CLEAR_CART",
          })
        }
      >
        CLEAR-CART
      </RemoveBtn>
    </div>
  );
};

export default CartDetails;

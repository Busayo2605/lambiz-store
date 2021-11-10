import React from "react";
import { StoreState } from "../context/context";
import {
  AddBtn,
  DetailsContainer,
  ImageContainer,
  ProdContainer,
  ProdImage,
  RemoveBtn,
  SubTitleBold,
} from "./style";

const SingleProduct = ({ product }) => {
  const {
    state: { cartItem },
    dispatch,
  } = StoreState();

  return (

        <ProdContainer>
          <ImageContainer>
            <ProdImage src={product.image} alt="products" />
          </ImageContainer>
          <DetailsContainer className="details">
            <div>
              <SubTitleBold>{product.title}</SubTitleBold>
              <SubTitleBold>Price: ${product.price}</SubTitleBold>
            </div>
            {cartItem.find((p) => p.id === product.id) ? (
              <RemoveBtn
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  })
                }
              >
                Remove From Cart
              </RemoveBtn>
            ) : (
              <AddBtn
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  })
                }
              >
                Add to cart
              </AddBtn>
            )}
          </DetailsContainer>
        </ProdContainer>
    
  );
};

export default SingleProduct;

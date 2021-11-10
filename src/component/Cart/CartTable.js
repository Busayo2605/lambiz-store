import React from "react";
import { MdDelete } from "react-icons/md";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import {
  DetailsContainer,
  ImageContainer,
  ProdContainer,
  ProdImage,
  SubTitleBold,
} from "../style";
import { StoreState } from "../../context/context";

const CartTable = ({ item }) => {
  const { dispatch } = StoreState();
  return (
    <ProdContainer>
      <ImageContainer>
        <ProdImage style={{width:'100%',height:'100%'}} src={item.image} alt="products" />
      </ImageContainer>
      <DetailsContainer className="details">
        <div>
          <SubTitleBold>{item.title}</SubTitleBold>
          <SubTitleBold>Price: ${item.price}</SubTitleBold>
        </div>
        <div style={{fontSize:'18px'}}>
          {item.qty === 1 ? (
            <IoIosArrowDropleft
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item,
                })
              }
            />
          ) : (
            <IoIosArrowDropleft
              onClick={() =>
                dispatch({
                  type: "DECREASE_QUANTITY",
                  payload: item.id,
                })
              }
            />
          )}
          <span style={{ padding: "0.5rem" }}>{item.qty}</span>
          <IoIosArrowDropright
            onClick={() =>
              dispatch({
                type: "INCRESE_QUANTITY",
                payload: item,
              })
            }
          />
        </div>
        <div style={{color:'red', fontSize:'1.5rem'}}>
          <MdDelete
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: item,
              })
            }
          />
        </div>
      </DetailsContainer>
    </ProdContainer>

  );
};

export default CartTable;

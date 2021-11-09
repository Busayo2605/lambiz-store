import React from "react";
import { MdDelete } from "react-icons/md";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { ProdImage } from "../style";
import { StoreState } from "../../context/context";
import { Table } from "react-bootstrap";

const CartTable = ({item}) => {
  const {
    dispatch,
  } = StoreState();
  return (
    <Table key={item.id}>
      <tbody>
        <tr>
          <td style={{ width: "20%", height: "120px" }}>
            <ProdImage src={item.image} alt="products" />
          </td>
          <td>{item.title}</td>
          <td>Price: ${item.price * item.qty}</td>
          <td>
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
          </td>
          <td>
            <MdDelete
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item,
                })
              }
            />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CartTable;

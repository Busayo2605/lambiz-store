import { useEffect } from "react";
import { useState } from "react";
import { StoreState } from "../../context/context";
import { Order, SubTitleBold } from "../style";
import OrderItem from "./OrderItem";
import {AiOutlineCloseCircle} from 'react-icons/ai'

const OrderList = ({ item }) => {
  const { status } = StoreState();
  const [orderTotal, setorderTotal] = useState(0)
  const date = new Date();
  useEffect(() => {
    setorderTotal(
      item.reduce(
        (acc, curr) => acc + Number(curr.price) * curr.qty,
        0
      )
    );
  }, [item]);

  return (
    <Order>
      <AiOutlineCloseCircle/>
      {item.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
      <div className='order-details'>
        <div className='order-item'>
          <SubTitleBold>X{item.length} Items</SubTitleBold>
          <SubTitleBold>${orderTotal}</SubTitleBold>
        </div>
        <div>
          <strong className="status">STATUS: {status}</strong>
        </div>
      </div>
    </Order>
  );
};

export default OrderList;

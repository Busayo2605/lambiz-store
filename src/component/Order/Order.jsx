import { useEffect } from "react";
import { useState } from "react";
import { StoreState } from "../../context/context";
import { Order, SubTitleBold } from "../style";
import OrderItem from "./OrderItem";
const OrderList = ({ item }) => {
  const { status } = StoreState();
  const [orderTotal, setorderTotal] = useState(0)
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
      {item.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
      <div className='order-details'>
        <div className='order-item'>
          <SubTitleBold style={{fontWeight:'bold'}}>X{item.length} Items</SubTitleBold>
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

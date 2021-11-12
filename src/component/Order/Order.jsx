import { StoreState } from "../../context/context";
import { Order } from "../style";
import OrderItem from "./OrderItem";

const OrderList = ({ item }) => {
  const { status } = StoreState();
  const date = new Date()
  return (
    <Order>
      {/* <span>Created: {date}</span> */}
      {item.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
      <strong className="status">STATUS: {status}</strong>
    </Order>
  );
};

export default OrderList;

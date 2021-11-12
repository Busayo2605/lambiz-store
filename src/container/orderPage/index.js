import OrderList from "../../component/Order/Order";
import { OrderContainer, Title } from "../../component/style";

const OrderPage = () => {
  const List =JSON.parse(localStorage.getItem("my-order")) || []
  return (
    <div>
      {List.length > 0 ? (
        <OrderContainer>
          {List.map((item) => (
            <OrderList item={item} />
          ))}
        </OrderContainer>
      ) : (
        <div className="empty-body">
          <Title>Your History is Empty</Title>
        </div>
      )}
    </div>
  );
};

export default OrderPage;

import {
  DetailsContainer,
  ImageContainer,
  ProdContainer,
  ProdImage,
  SubTitleBold,
} from "../style";

const OrderItem = ({ order }) => {
  return (
    <ProdContainer>
      <ImageContainer>
        <ProdImage
          style={{ width: "100%", height: "100%" }}
          src={order.image}
          alt="products"
        />
      </ImageContainer>
      <DetailsContainer className="details">
        <div>
          <SubTitleBold>{order.title}</SubTitleBold>
          <SubTitleBold>Price: ${order.price}</SubTitleBold>
        </div>
        <div style={{ fontSize: "18px" }}>
          <SubTitleBold style={{ padding: "0.5rem" }}> Quantity:{order.qty}</SubTitleBold>
        </div>
      </DetailsContainer>
    </ProdContainer>
  );
};

export default OrderItem;

import React from "react";
import { Container } from "react-bootstrap";

import SingleProduct from "../../component/SingleProduct";
import Products from "../../products";

const StorePage = () => {
  return <Container>{Products.map((product) =><SingleProduct key={product.id} product={product}/>)}</Container>;
};

export default StorePage;

import React from "react";
import { Container } from "react-bootstrap";
import Loading from "../../component/loading";

import SingleProduct from "../../component/SingleProduct";
import { StoreState } from "../../context/context";
import Products from "../../products";

const StorePage = () => {
  const { loading, setLoading } = StoreState();

  setTimeout(() => {
    setLoading(false)
  }, 4000);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {Products.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </Container>
      )}
    </>
  );
};

export default StorePage;

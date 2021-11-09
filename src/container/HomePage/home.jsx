import { Link } from "react-router-dom";
import { HomeContainer, SubTitle, Title } from "../../component/style";

const HomePage = () => {

  return (
    <HomeContainer>
      <Title>Quality products, Fast delivery, and more.</Title>
      <SubTitle>Shop anywhere. Shop anytime</SubTitle>
      <Link to="/store" className="shop-btn">
        Shop Now
      </Link>
    </HomeContainer>
  );
};

export default HomePage;

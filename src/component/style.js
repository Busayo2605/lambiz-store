import styled from "styled-components";

export const Title = styled.h2`
  font-weight: 500;
  color: #000;
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const SubTitle = styled.h5`
  font-size: 1.6rem;
  font-style: italic;
  font-weight: 300;
  margin-bottom: 1rem;
  color: #000;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`;
export const SubTitleBold = styled.h5`
  font-size: 18px;
  font-weight: 400;
  color: #000;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  text-align: center;
  color: #fff;
  height: 90vh;
`;
export const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: inherit;
  flex-grow: inherit;
  width: 100%;
  height: 90vh;
`;
export const SignCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px black solid;
  border-radius: 10px;
  margin-top: 2rem;
  padding: 1.5rem;
  margin-bottom: 1rem;

  /* @media only screen and (max-width: 400px) {
    border:none;
  } */
`;
export const SignUpCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px black solid;
  border-radius: 10px;
  margin-top: 0.7rem;
  font-size: 0.9rem;
  padding: 15px 1.5rem;
  margin-bottom: 1rem;

  /* @media only screen and (max-width: 400px) {
    border:none;
  } */
`;
export const Navbar = styled.div`
  position: sticky;
  display: flex;
  padding: 10px 50px;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  box-shadow: 2px 2px 12px 6px rgb(255, 254, 254);
  background: #f6f6f6;
  margin-bottom: 12px;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    padding: 10px 10px;
  }
`;
export const ShopLink = styled.a`
  border: none;
  padding: 0.7rem;
  font-size: 1.5rem;
  font-weight: 500;
  background: red;
  color: #fff;
  transition: all ease 1s;
`;
export const LightBtn = styled.button`
  display: block;
  border: none;
  width: 350px;
  border-radius: 5px;
  padding: 5px 20px;
  background: none;
  border: 1px solid #0080ff;
  color: black;
  @media only screen and (max-width: 400px) {
    border:none;
  }
`;
export const DarkBtn = styled.button`
  display: block;
  width: 50%;
  border-radius: 5px;
  border: none;
  padding: 5px 20px;
  background: #0080ff;
  color: #fff;
`;
export const CartBtn = styled.button`
  border-radius: 8px;
  border: none;
  color: #000;
  height: 35px;
  margin-left: 1rem;
  margin-right: 1rem;
`;
export const Input = styled.input`
  display: block;
  width: 300px;
  border: none;
  outline: none;
  margin-bottom: 20px;
  padding: 6px;
  border-bottom: black 2px solid;
  margin-top: 20px;
  margin-bottom: 20px;
  @media only screen and (max-width: 400px) {
    width: 250px;
  }
`;
export const ProdContainer = styled.div`
  display: flex;
  height:100%;
`;
export const ImageContainer = styled.div`
  width: 20%;
  height: 120px;
  @media only screen and (max-width: 768px) {
    height: 145px;
    width: 25%;
  }
`;
export const ProdImage = styled.img`
  width: 100%;
  height: 8rem;
  object-fit: contain;
  @media only screen and (max-width: 768px) {
    height: 6rem;
  }
`;
export const DetailsContainer = styled.div`
  background: #fff;
  margin: 10px;
  padding: 15px;
  width: 70%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  border-radius: 8px;
  box-shadow: 1px 1px 26px 0px #0000001a;

  @media only screen and (max-width: 768px) {
    display: block;
    height: 100%;
  }
`;
export const RemoveBtn = styled.button`
  border: none;
  border-radius: 20px;
  min-width: 160px;
  min-height: 45px;
  color: #f0f6f0;
  padding:0 15px;
  background: firebrick;
  :hover {
    background: rgb(228, 72, 72);
  }
  @media only screen and (max-width: 768px) {
    min-width: 120px;
    min-height: 40px;
  }
`;
export const AddBtn = styled.button`
  border: none;
  border-radius: 20px;
  min-width: 160px;
  min-height: 45px;
  color: #f0f6f0;
  transition: all ease-in-out 0.5s;
  background: #0080ff;
  :hover {
    background: rgb(200, 188, 255);
  }
  @media only screen and (max-width: 768px) {
    min-width: 120px;
    min-height: 40px;
  }
`;


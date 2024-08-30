import styled from "styled-components";
import Banner from "./bannerSection/banner";
import Products from "./productsSection/products";
// import AdArea from "@/components/common/AdArea";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <Banner />
      <Products />
      {/* <AdArea /> */}
    </MainContainer>
  );
};

export default Main;

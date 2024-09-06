// app/store/product/[id]/ProductDetail.js

"use client"; // 클라이언트 컴포넌트로 지정
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import styled from "styled-components";
import React, { useState } from "react";
import { SessionProvider } from "next-auth/react";
import LoginModal from "@/components/login/loginModal";

const ProductDetailContainer = styled.div`
  width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 36px;
`;

//Top
//Top
const ProductTop = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;
`;

const ImageWrapper = styled.div`
  width: 684px;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
`;

const ProductMainImage = styled.img`
  width: 684px;
  max-height: 584px;
  object-fit: cover;
  border-radius: 10px;
`;

const ProductSubImagesBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;
`;

const ProductSubImage = styled.img`
  width: 222px;
  height: 222px;
  object-fit: contain;
  border-radius: 10px;
  background-color: #fff;
`;
const ProductInfoWrapper = styled.div`
  margin-left: 20px;
  width: 880px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;

const PageNavi = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  font-size: 20px;
  color: #666;
`;

const ProductTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
`;

const ProductStoreName = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 24px;
  color: #666;
  margin: 10px 0;

  & div {
    font-weight: bold;
    color: #0078ff;
  }
`;

const ProductDescription = styled.p`
  font-size: 18px;
  color: #666;
  min-height: 280px;
  margin-bottom: 20px;
`;

const DivisionLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
`;

const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px 40px;
  gap: 10px;
  background-color: #f2f2f2;
  min-height: 260px;
`;

const OrderDeliveryBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: yellow;
`;

const OptionBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const OptionSelect = styled.select`
  width: 450px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #666;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  color: #666;
`;

const QuantityBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: yellow;
`;

const QuantitySelectBox = styled.div`
  height: 40px;
  padding: 5px;
`;

const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: 18px;
  background-color: #e5e5e5;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #d4d4d4;
  }
`;

const QuantityInput = styled.input`
  width: 50px;
  text-align: center;
  font-size: 16px;
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const PriceBox = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 24px;
  margin: 10px 0;
  background-color: yellow;

  & div {
    font-weight: bold;
    color: #0078ff;
  }
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  background-color: yellow;
`;

const CartButton = styled.button`
  width: 50%;
  height: 50px;
  background-color: #666;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 10px;
`;

const BuyButton = styled.button`
  width: 50%;
  height: 50px;
  background-color: #0078ff;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 10px;
`;

//Mid
//Mid

const ProductMid = styled.div`
  display: flex;
  flex-direction: column;
  background-color: green;
`;

//Bottom
//Bottom
const ProductBottom = styled.div`
  display: flex;
  flex-direction: column;
  background-color: blue;
`;

export default function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1); // 수량 상태
  // 수량을 조절하는 함수
  const handleQuantityChange = (e) => {
    const value = e.target.value;
    // 빈 문자열을 허용하고, 1 이상 숫자로 제한
    if (value === "" || Number(value) > 0) {
      setQuantity(value === "" ? "" : Number(value));
    }
  };

  // 수량 감소
  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1)); // 최소 1로 제한
  };
  // 수량 증가
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  //로그인 테스트
  const [showLoginModal, setShowLoginModal] = useState(false);
  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  return (
    <SessionProvider>
      <Header />
      <ProductDetailContainer>
        <ProductTop>
          <ImageWrapper>
            <ProductMainImage src={product.imageUrl} alt={product.name} />
            <ProductSubImagesBox>
              <ProductSubImage src={product.imageUrl} alt={product.name} />
              <ProductSubImage src={product.imageUrl} alt={product.name} />
              <ProductSubImage src={product.imageUrl} alt={product.name} />
            </ProductSubImagesBox>
          </ImageWrapper>
          <ProductInfoWrapper>
            <PageNavi>
              <div>홈</div>
              <div>쇼핑몰</div>
              <div>카테고리</div>
            </PageNavi>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductStoreName>
              판매자 | &nbsp;<div>{product.storeName}</div>
            </ProductStoreName>
            <ProductDescription>{product.description}</ProductDescription>
            <DivisionLine />
            <OrderBox>
              <OrderDeliveryBox>
                <p>배송방법</p>
                <p>배송비 | &nbsp;000원 (50,000원 이상 구매 시 무료 배송)</p>
              </OrderDeliveryBox>
              <OptionBox>
                <div>OptionBox</div>
                <OptionSelect />
              </OptionBox>
              <QuantityBox>
                <div>개수</div>
                <QuantitySelectBox>
                  <QuantityButton onClick={decreaseQuantity}>-</QuantityButton>
                  <QuantityInput
                    type="string"
                    value={quantity}
                    onChange={handleQuantityChange}
                  />
                  <QuantityButton onClick={increaseQuantity}>+</QuantityButton>
                </QuantitySelectBox>
              </QuantityBox>
              <PriceBox>
                총 금액 <div>{product.price * quantity}원</div>
              </PriceBox>
              <SelectBox>
                <CartButton onClick={openLoginModal}>장바구니 담기</CartButton>
                {showLoginModal && <LoginModal onClose={closeLoginModal} />}
                <BuyButton>바로 구매</BuyButton>
              </SelectBox>
            </OrderBox>

            <p>재고: {product.stock} 개</p>
          </ProductInfoWrapper>
        </ProductTop>
        <DivisionLine />
        <ProductMid>
          <h2>상품 상세 설명</h2>
          <p>{product.description}</p>
        </ProductMid>
        <DivisionLine />
        <ProductBottom>
          <h2>상품 리뷰</h2>
          <p>리뷰가 없습니다.</p>
        </ProductBottom>
      </ProductDetailContainer>
      <Footer />
    </SessionProvider>
  );
}

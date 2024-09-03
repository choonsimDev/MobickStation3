import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
// import ModalReady from "@/components/modal/ModalReady";

const MainContainer = styled.div`
  width: 1600px;
  margin: 0 auto;
  margin-top: 40px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const MoreButton = styled.button`
  width: 115px;
  height: 44px;
  background-color: #e5e5e5;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: black;
  &:hover {
    background-color: #d4d4d4;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    width: 75px;
    height: 30px;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  gap: 20px;
  grid-template-columns: (5, 1fr);

  cursor: pointer;
  :hover {
    transform: scale(1.01);
    transition: transform 0.5s;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Create two columns */
    gap: 10px; /* Space between the items */
  }
`;

export const ProductBox = styled.div`
  width: 300px;
  height: 416px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

export const ProductImage = styled.img`
  width: 300px;
  height: 240px;
  object-fit: cover;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
  }
`;

export const ProductContent = styled.div`
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 20px;
  color: #666;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  position: absolute;
  bottom: 10px;
  right: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const PriceNumber = styled.span`
  color: #0078ff;
`;

export const PriceUnit = styled.span`
  color: black;
`;

const popularProducts = [
  {
    imageUrl: "/images/store/wallet_1.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "99,000",
  },
  {
    imageUrl: "/images/store/o4fan.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "50,000",
  },
  {
    imageUrl: "/images/store/cjman.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "39,800",
  },
  {
    imageUrl: "/images/store/jufrieden.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "170,000",
  },
  {
    imageUrl: "/images/store/jufrieden.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "170,000",
  },
];

const walletProducts = [
  {
    imageUrl: "/images/store/wallet_1.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "99,000",
  },
  {
    imageUrl: "/images/store/o4fan.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "50,000",
  },
  {
    imageUrl: "/images/store/cjman.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "39,800",
  },
  {
    imageUrl: "/images/store/jufrieden.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "170,000",
  },
  {
    imageUrl: "/images/store/jufrieden.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "170,000",
  },
];

const goodsProducts = [
  {
    imageUrl: "/images/store/wallet_1.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "99,000",
  },
  {
    imageUrl: "/images/store/o4fan.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "50,000",
  },
  {
    imageUrl: "/images/store/cjman.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "39,800",
  },
  {
    imageUrl: "/images/store/jufrieden.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "170,000",
  },
  {
    imageUrl: "/images/store/jufrieden.png",
    name: "판매 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "170,000",
  },
];

function ProductSection({ title, link, products }) {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        <Link href="/store/category">
          <MoreButton>+더보기</MoreButton>
        </Link>
      </SectionHeader>
      <ProductsContainer>
        {products.map((product, index) => (
          <ProductBox key={index}>
            <ProductImage src={product.imageUrl} alt={product.name} />
            <ProductContent>
              <div>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
              </div>
              <ProductPrice>
                <PriceNumber>{product.price}</PriceNumber>
                <PriceUnit> 원</PriceUnit>
              </ProductPrice>
            </ProductContent>
          </ProductBox>
        ))}
      </ProductsContainer>
    </Section>
  );
}

export default function MainPage() {
  return (
    <MainContainer>
      <ProductSection
        title="인기상품"
        link="/popular"
        products={popularProducts}
      />
      <ProductSection
        title="종이지갑 상품"
        link="/wallet"
        products={walletProducts}
      />
      <ProductSection
        title="굿즈 상품"
        link="/goods"
        products={goodsProducts}
      />
    </MainContainer>
  );
}

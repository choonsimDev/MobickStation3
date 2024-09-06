import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
// import ModalReady from "@/components/modal/ModalReady";
import {
  hamsterProducts,
  catProducts,
  dogProducts,
} from "@/app/api/getproducts/getproducts";

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
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(5, 1fr); /* 5개의 열을 만듭니다 */

  cursor: pointer;
  :hover {
    transform: scale(1.01);
    transition: transform 0.5s;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    grid-template-columns: repeat(2, 1fr); /* 작은 화면에서는 2개의 열 */
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

function ProductSection({ title, link, products = [] }) {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        <Link href={link}>
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

export default async function MainPage() {
  const hamsterData = await hamsterProducts();
  const catData = await catProducts();
  const dogData = await dogProducts();

  console.log("hamsterData============", hamsterData);
  return (
    <MainContainer>
      <ProductSection
        title="인기상품"
        link="/store/category"
        products={hamsterData}
      />
      <ProductSection title="강아지" link="/dog" products={dogData} />
      <ProductSection title="햄스터" link="/hamster" products={hamsterData} />
      <ProductSection title="고양이" link="/cat" products={catData} />
    </MainContainer>
  );
}

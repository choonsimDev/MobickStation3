"use client";

import React, { useState } from "react";
import styled from "styled-components";
import {
  ProductBox,
  ProductImage,
  ProductContent,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  PriceNumber,
  PriceUnit,
} from "@/components/main/productsSection/products";
import Link from "next/link"; // Link 컴포넌트 추가

const MainContainer = styled.div`
  width: 1600px;
  margin: 0 auto;
  margin-top: 40px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #e5e5e5;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  color: black;
  &:hover {
    background-color: #d4d4d4;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 16px;
  }

  &.active {
    background-color: #0078ff;
    color: white;
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

const ProductsContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  cursor: pointer;
  :hover {
    transform: scale(1.01);
    transition: transform 0.5s;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

function ProductSection({ title, products = [] }) {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
      </SectionHeader>
      <ProductsContainer>
        {products.length > 0 ? (
          products.map((product, index) => (
            <Link key={index} href={`/store/product/${product.id}`}>
              <ProductBox key={index}>
                <ProductImage src={product.imageUrl} alt={product.name} />
                <ProductContent>
                  <div>
                    <ProductTitle>{product.name}</ProductTitle>
                    <ProductDescription>
                      {product.description}
                    </ProductDescription>
                  </div>
                  <ProductPrice>
                    <PriceNumber>{product.price}</PriceNumber>
                    <PriceUnit> 원</PriceUnit>
                  </ProductPrice>
                </ProductContent>
              </ProductBox>
            </Link>
          ))
        ) : (
          <p>제품이 없습니다.</p>
        )}
      </ProductsContainer>
    </Section>
  );
}

export default function CategoryClient({ hamsterData, catData, dogData }) {
  const [activeFilter, setActiveFilter] = useState("전체");
  const [filteredProducts, setFilteredProducts] = useState([
    ...hamsterData,
    ...catData,
    ...dogData,
  ]);

  const handleFilterClick = (filter) => {
    console.log(`Filter clicked: ${filter}`); // 클릭된 필터 확인용
    setActiveFilter(filter);
    if (filter === "전체") {
      setFilteredProducts([...hamsterData, ...catData, ...dogData]);
    } else if (filter === "햄스터") {
      setFilteredProducts(hamsterData);
    } else if (filter === "고양이") {
      setFilteredProducts(catData);
    } else if (filter === "강아지") {
      setFilteredProducts(dogData);
    }
    console.log(`Filtered products: `, filteredProducts); // 필터링된 데이터 확인
  };

  return (
    <MainContainer>
      <Header>
        <Title>카테고리</Title>
        <FilterContainer>
          {["전체", "햄스터", "고양이", "강아지"].map((filter) => (
            <FilterButton
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={activeFilter === filter ? "active" : ""}
            >
              {filter}
            </FilterButton>
          ))}
        </FilterContainer>
      </Header>
      <ProductSection title={activeFilter} products={filteredProducts} />
    </MainContainer>
  );
}

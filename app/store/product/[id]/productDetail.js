// app/store/product/[id]/ProductDetail.js

"use client"; // 클라이언트 컴포넌트로 지정

import styled from "styled-components";

// 스타일드 컴포넌트
const ProductDetailContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const ProductImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
`;

const ProductContent = styled.div`
  margin-left: 20px;
`;

const ProductTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;

const ProductPrice = styled.p`
  font-size: 24px;
  color: #0078ff;
  margin: 10px 0;
`;

const ProductDescription = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
`;

export default function ProductDetail({ product }) {
  return (
    <ProductDetailContainer>
      <div style={{ display: "flex" }}>
        <ProductImage src={product.imageUrl} alt={product.name} />
        <ProductContent>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>{product.price} 원</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
          <p>재고: {product.stock} 개</p>
          <p>카테고리: {product.categoryName}</p>
          <p>매장: {product.storeName}</p>
        </ProductContent>
      </div>
    </ProductDetailContainer>
  );
}

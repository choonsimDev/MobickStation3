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
} from "@/src/components/main/productsSection/products";
// import ModalReady from "@/components/modal/ModalReady";

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

// const ProductBox = styled.div`
//   width: 340px;
//   height: 416px;
//   border-radius: 8px;
//   overflow: hidden;
//   background-color: #fff;
//   display: flex;
//   flex-direction: column;
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);

//   @media (max-width: 768px) {
//     width: 100%;
//     height: 300px;
//   }
// `;

// const ProductImage = styled.img`
//   width: 340px;
//   height: 240px;
//   object-fit: cover;
//   background-color: #f5f5f5;

//   @media (max-width: 768px) {
//     width: 100%;
//     height: 180px;
//   }
// `;

// const ProductContent = styled.div`
//   padding: 10px;
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   position: relative;

//   @media (max-width: 768px) {
//     padding: 5px;
//   }
// `;

// const ProductTitle = styled.h3`
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 10px;

//   @media (max-width: 768px) {
//     font-size: 14px;
//   }
// `;

// const ProductDescription = styled.p`
//   font-size: 20px;
//   color: #666;
//   margin-bottom: 10px;

//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// const ProductPrice = styled.p`
//   font-size: 24px;
//   font-weight: bold;
//   color: #333;
//   position: absolute;
//   bottom: 10px;
//   right: 10px;

//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;
// const PriceNumber = styled.span`
//   color: #0078ff;
// `;

// const PriceUnit = styled.span`
//   color: black;
// `;

const walletProducts = [
  {
    imageUrl: "/images/store/wallet_1.png",
    name: "종이지갑 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "99,000",
  },
  {
    imageUrl: "/images/store/o4fan.png",
    name: "종이지갑 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "50,000",
  },
  {
    imageUrl: "/images/store/cjman.png",
    name: "종이지갑 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "39,800",
  },
  {
    imageUrl: "/images/store/jufrieden.png",
    name: "종이지갑 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "170,000",
  },
  {
    imageUrl: "/images/store/jufrieden.png",
    name: "종이지갑 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "170,000",
  },
];

const goodsProducts = [
  {
    imageUrl: "/images/store/wallet_1.png",
    name: "굿즈 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "99,000",
  },
  {
    imageUrl: "/images/store/o4fan.png",
    name: "굿즈 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "50,000",
  },
  {
    imageUrl: "/images/store/cjman.png",
    name: "굿즈 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "39,800",
  },
  {
    imageUrl: "/images/store/jufrieden.png",
    name: "굿즈 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "170,000",
  },
  {
    imageUrl: "/images/store/jufrieden.png",
    name: "굿즈 상품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "170,000",
  },
];

const necessitiesProducts = [
  {
    imageUrl: "/images/store/wallet_1.png",
    name: "생활용품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "99,000",
  },
  {
    imageUrl: "/images/store/o4fan.png",
    name: "생활용품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "50,000",
  },
  {
    imageUrl: "/images/store/cjman.png",
    name: "생활용품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "39,800",
  },
  {
    imageUrl: "/images/store/jufrieden.png",
    name: "생활용품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "170,000",
  },
  {
    imageUrl: "/images/store/jufrieden.png",
    name: "생활용품 예시",
    description: "판매 상품 예시 이미지입니다.",
    price: "170,000",
  },
];

const allProducts = [
  ...walletProducts,
  ...goodsProducts,
  ...necessitiesProducts,
];

function ProductSection({ title, products }) {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
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

export default function Category() {
  const [activeFilter, setActiveFilter] = useState("전체");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    switch (filter) {
      case "종이지갑":
        setFilteredProducts(walletProducts);
        break;
      case "굿즈":
        setFilteredProducts(goodsProducts);
        break;
      case "생활용품":
        setFilteredProducts(necessitiesProducts);
        break;
      default:
        setFilteredProducts(allProducts);
    }
  };

  return (
    <MainContainer>
      <Header>
        <Title>카테고리</Title>
        <FilterContainer>
          {["전체", "종이지갑", "굿즈", "생활용품"].map((filter) => (
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

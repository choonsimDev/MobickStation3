import styled from "styled-components";
import React, { useState } from "react";
import AuthButtons from "../auth/authButton";
// import ModalReady from "../modal/ModalReady";
// import Link from "next/link";
// import Image from "next/image";

const StyledHeader = styled.div`
  width: 1600px;
  padding: 20px 60px;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 0px 10px 0px;
  }
`;

const Divider = styled.span`
  margin: 0 10px;
  color: #e5e5e5;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLogoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & div {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  @media (max-width: 768px) {
    padding-left: 10px;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  cursor: pointer;
  & div:first-child {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LogoImage = styled.img`
  width: 240px;
  @media (max-width: 768px) {
    width: 200px;
  }
`;

const StyledLinkFirst = styled.a`
  color: #0078ff;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  gap: 20px;

  &:after {
    // 기본 :after 스타일 정의
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 1px;
    background-color: #f6931a;
    transform: scaleX(0); // 초기 상태에서는 가로 길이 0으로 설정
    transform-origin: 50%;
    transition: transform 0.3s ease;
  }
  &:hover:after {
    // div에 마우스를 올렸을 때 :after 스타일 변경
    transform: scaleX(1); // 호버 시 scaleX를 1로 설정하여 전체 너비로 확장
  }

  @media (max-width: 768px) {
    font-size: 16px;
    display: none;
  }
`;

const SearchLoginBox = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const SearchBar = styled.div`
  width: 400px;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 10px;
  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
    padding: 0;
  }
`;

const SearchIcon = styled.img`
  width: 24px;

  @media (max-width: 768px) {
    width: 24px;
  }
`;
const HamburgerIcon = styled.img`
  display: none;
  padding-left: 10px;
  @media (max-width: 768px) {
    display: flex;
    width: 28px;
  }
`;

const StyledInput = styled.input`
  width: 90%;
  height: 44px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export default function LogoAndSearch() {
  //   const [isModalVisible, setIsModalVisible] = useState(false);
  //   const showModal = () => {
  //     setIsModalVisible(true);
  //   };
  //   const hideModal = () => {
  //     setIsModalVisible(false);
  //   };

  return (
    <StyledHeader>
      <StyledLogoBox>
        <StyledLogo>
          <LogoImage
            src="/images/logos/logo_mobickstation_header.png"
            alt="Logo"
          />
        </StyledLogo>
        <Divider>|</Divider>

        <div>
          <StyledLinkFirst>쇼핑몰</StyledLinkFirst>
          {/* <StyledLinkFirst onClick={showModal}>쇼핑몰</StyledLinkFirst> */}
          <StyledLinkFirst href="/community/mobicker">커뮤니티</StyledLinkFirst>
        </div>
      </StyledLogoBox>
      {/* {isModalVisible && <ModalReady onClose={hideModal} />} */}
      <SearchLoginBox>
        <SearchBar>
          <StyledInput placeholder="비트모빅 종이지갑"></StyledInput>
          <SearchIcon src="/images/icons/icon_search.png" alt="Search Icon" />
        </SearchBar>
        <HamburgerIcon
          src="/images/icons/icon_hamburger.png"
          alt="Hamburger Icon"
        />

        <AuthButtons />
      </SearchLoginBox>
    </StyledHeader>
  );
}

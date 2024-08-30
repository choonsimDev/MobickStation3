import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 40px 60px;
  background-color: #e5e5e5;
  max-width: 1600px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterLeftBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const LogoImage = styled.img`
  width: 300px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    width: 200px;
  }
`;

const InfoTextTop = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  color: #737373;
  line-height: 1.6;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 14px;
  }
`;
const InfoTextBottom = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  color: #737373;
  line-height: 1.6;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Separator = styled.span`
  display: inline-block;
  margin: 0 10px;
  color: #ccc;
`;

const FooterRightBox = styled.div`
  width: 600px;
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 18px;
  color: #737373;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 14px;
  }
`;

const ContactTitle = styled.h4`
  font-size: 30px;
  font-weight: bold;
  color: #737373;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 20px;
  }
`;

const SocialIconsBox = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialIcon = styled.img`
  width: 48px;
  height: 48px;
`;

const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CopyrightText = styled.div`
  font-size: 18px;
  color: #a0a0a0;
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
`;

const TermsBox = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const TermLink = styled.a`
  font-size: 14px;
  color: #0078ff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterLeftBox>
          <LogoImage
            src="/images/logos/logo_mobickstation_footer.png"
            alt="Logo"
          />
          <InfoTextTop>
            <div>상호명 : 모빅스테이션</div>
            <Separator>|</Separator>
            <div>대표자 : 조용래</div>
          </InfoTextTop>
          <br />
          <InfoTextBottom>
            <div>사업자 등록번호 : 505-21-96326</div>
            <Separator>|</Separator>
            <div>통신 판매업 신고 : 2024-경기성남-1234</div>
          </InfoTextBottom>
        </FooterLeftBox>
        <FooterRightBox>
          <ContactBox>
            <ContactTitle>Contact Us</ContactTitle>
            문의 : choonsim.dev@gmail.com
          </ContactBox>
          <SocialIconsBox>
            <SocialIcon src="/images/icons/icon_kakao.png" alt="kakao" />
            <SocialIcon src="/images/icons/icon_youtube.png" alt="youtube" />
            <SocialIcon
              src="/images/icons/icon_instagram.png"
              alt="instagram"
            />
            <SocialIcon src="/images/icons/icon_facebook.png" alt="facebook" />
            <SocialIcon src="/images/icons/icon_twitter.png" alt="twitter" />
          </SocialIconsBox>
        </FooterRightBox>
      </FooterTop>
      <BottomBox>
        <CopyrightText>
          COPYRIGHT ⓒ MOBICK STATION ALL RIGHTS RESERVED.
        </CopyrightText>
        <TermsBox>
          <TermLink href="/terms">이용 약관</TermLink>
          <Separator>|</Separator>
          <TermLink href="/privacy">개인정보 처리방침</TermLink>
        </TermsBox>
      </BottomBox>
    </FooterContainer>
  );
};

export default Footer;

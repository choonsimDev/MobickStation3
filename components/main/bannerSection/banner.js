import React, { useState } from "react";
import styled from "styled-components";
import SwiperBanner from "./bannerSwiper";

const StyledBannerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 40px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); // 그림자 추가 */
  z-index: 1; /* 배너의 z-index 값을 낮게 설정 */
  overflow: hidden; /* 넘치는 내용 숨기기 */

  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;

const MainBanner = styled.div`
  max-width: 1600px;
  max-height: 500px;
  height: 500px;
  background-color: #f2f2f2;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const MainBannerImgBox = styled.a`
  height: 100%;
  cursor: pointer;
`;

export default function Banner() {
  return (
    <div>
      <StyledBannerWrapper>
        <MainBanner>
          <MainBannerImgBox>
            <SwiperBanner />
          </MainBannerImgBox>
        </MainBanner>
      </StyledBannerWrapper>
    </div>
  );
}

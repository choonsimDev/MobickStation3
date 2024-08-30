import React, { useState } from "react";
import styled from "styled-components";
import SwiperBanner from "./bannerSwiper";

const StyledBannerWrapper = styled.div`
  max-width: 1600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  margin-top: 40px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); // 그림자 추가 */
  z-index: 1; /* 배너의 z-index 값을 낮게 설정 */
`;

const MainBanner = styled.div`
  width: 100%;
  max-width: 1600px;
  height: 500px;
  background-color: #f2f2f2;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;
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

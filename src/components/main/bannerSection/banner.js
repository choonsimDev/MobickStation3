import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import styled from "styled-components";
import "swiper/swiper-bundle.css"; // Swiper 기본 스타일 가져오기

const BannerContainer = styled.div`
  width: 1600px;
  height: 500px;
  margin: 0 auto;
  padding-top: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding-top: 10px;
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
`;

export default function Banner() {
  return (
    <BannerContainer>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        style={{ height: "100%" }}
      >
        <SwiperSlide>
          <Slide style={{ backgroundColor: "gray" }} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide style={{ backgroundColor: "lightgray" }} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide style={{ backgroundColor: "whitesmoke" }} />
        </SwiperSlide>
      </Swiper>
    </BannerContainer>
  );
}

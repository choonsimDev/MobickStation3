import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function SwiperBanner() {
  return (
    <>
      <Swiper
      // slidesPerView={1}
      // spaceBetween={30}
      // loop={true}
      // pagination={{
      //   clickable: true,
      // }}
      // navigation={true}
      // autoplay={{
      //   delay: 5000,
      //   disableOnInteraction: false,
      // }}
      // modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <img src="./images/products/banner_test.png" alt="test" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/products/banner_test2.png" alt="test" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

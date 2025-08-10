import React from "react";
import { assets } from "../assets/asset";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const Slide = () => {
  return (
    <div>
      <Swiper
        className="mt-5 slide"
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img
            src={assets.slide1}
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={assets.slide2}
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={assets.slide3}
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={assets.slide4}
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;

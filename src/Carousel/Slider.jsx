import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

const Slider = () => {
    const imgSrc = [
      "https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/be744e72607fe1487df46c281e23e27399b8c5df4e9a49cefaafa779c29183b0?apiKey=fd68332350f04fa6815471d918ff3511&width=800", 
      "https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/bb523048b9fe90ee421e603f24d58827331b1a70948bb9a469f6a1e9f68b80be?apiKey=fd68332350f04fa6815471d918ff3511&width=800", 
      "https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/d03f4b83aff18593f7e1afd2a46ddbd677a46d41a36c0cbb863fe1d1edc2cb19?apiKey=fd68332350f04fa6815471d918ff3511&width=800"
    ];
  
    return (
      <Swiper
        modules={[Navigation, Pagination,A11y, Autoplay]}
        spaceBetween={100}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
            delay: 2000, // Delay between slides (in milliseconds)
            disableOnInteraction: false, // Auto-slide even after manual interaction
        }}
        className="swiper-container h-[420px]"
      >
        {imgSrc.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              loading="lazy"
              src={image}
              className="object-cover w-full"
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
};

export default Slider;
  
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import French from "./../assets/imgs/french.webp";
import Zulu from "./../assets/imgs/zulu.png";
import Yoruba from "./../assets/imgs/youruba.png";
import { Autoplay } from 'swiper/modules';

export default function Carousel() {
  return (
    <div className="relative h-full">
      <div className="absolute h-4/5 w-4/5 -right-10 rounded-full bg-[#13FFB8] blur-3xl opacity-25" />
      <Swiper
        direction={'vertical'}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={15}
        slidesPerView={'auto'}
        className="mySwiper"

      >
        <SwiperSlide>
          <img
            src={Yoruba}
            alt="Yoruba"
            className="h-full w-auto cursor-grab"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={French}
            alt="French"
            className="h-full w-auto cursor-grab"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Zulu}
            alt="Zulu"
            className="h-full w-auto cursor-grab"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

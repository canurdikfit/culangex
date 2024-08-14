import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import French from "./../assets/imgs/french.webp";
import Zulu from "./../assets/imgs/zulu.png";
import Yoruba from "./../assets/imgs/youruba.png";

export default function Carousel() {
  return (
    <div className="relative">
      <div className="absolute h-4/5 w-4/5 -right-10 rounded-full bg-[#13FFB8] blur-3xl opacity-25" />
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={Yoruba}
            alt="Yoruba"
            className="lg:w-64 md:w-44 h-auto cursor-grab"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={French}
            alt="French"
            className="lg:w-64 md:w-44 h-auto cursor-grab"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Zulu}
            alt="Zulu"
            className="lg:w-64 md:w-44 h-auto cursor-grab"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

import BannerImg from "./../assets/imgs/banner_background.webp";
import ScrollDown from "./../assets/imgs/buttons/scrollDown.svg";
import JoinButton from "./../assets/imgs/buttons/join_waitlist.png";
import { Link } from "react-router-dom";
import Countries from "./Countries";
import Flower from "./../assets/imgs/flower_side.webp";

export default function Banner() {
  return (
    <section className="relative w-screen min-h-[650px] md:min-h-[850px] lg:min-h-[900px] bg-white flex items-end justify-center ">
      <div className="absolute z-10 top-0 w-full bg-gradient-to-b from-black/85 to-black/0 h-[150px] md:h-[300px]" />
      <div className="absolute z-10 bottom-0 w-full bg-gradient-to-b from-black/0 to-black h-[150px] md:h-[300px]" />
      <div className="absolute z-20 gradient_overlay h-full w-full" />
      <img
        src={BannerImg}
        alt="Banner Image"
        className="absolute h-full w-full object-cover object-bottom"
      />
      <img
        src={Flower}
        alt="Flower Vase"
        className="absolute bottom-0 lg:bottom-[7%] max-w-2xl md:max-w-4xl right-0 z-0"
      />
      <div className="relative z-20 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-5 md:gap-7 xl:gap-10">
          <h1>
            Transform the way you  <br />
            learn languages
          </h1>
          <Link to={'/join_waitlist'}>
            <button
              className="bg-none outline-none border-none max-w-[140px] md:max-w-[150px] xl:max-w-[240px] btnHov"
            >
              <img
                src={JoinButton}
                alt="Join Waitlist"
                className="h-auto w-full object-contain object-center"
              />
            </button>
          </Link>
        </div>
        <Countries />
        <div>
          <a
            href=""
            className="group flex items-center justify-center flex-col gap-1 md:gap-4"
          >
            <div className="relative">
              <img
                src={ScrollDown}
                alt="Join Waitlist"
                className="h-16 md:h-20 w-16 md:w-20 object-contain object-center"
              />
              <div className="absolute h-full w-full top-0 rounded-full border border-dashed border-white/50 scale-[0.7] group-hover:scale-50 group-hover:rotate-180 transition-all ease-in-out duration-500" />
            </div>
            <span className="text-[10px] md:text-xs xl:text-sm group-hover:-translate-y-2 transition-transform ease-in-out duration-500">
              Scroll Down To Discover More
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

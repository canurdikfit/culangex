
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FooterBackground from './../assets/imgs/FooterBg.webp';
import TwitterBtn from "./../assets/imgs/buttons/twitter.png";
import YoutubeBtn from "./../assets/imgs/buttons/youtube.png";
import LinkedInBtn from "./../assets/imgs/buttons/linkedin.png";
import InstagramBtn from "./../assets/imgs/buttons/instagram.png";
import CulangexLogo from "./../assets/imgs/culangex.png";
import Contact from './Contact';
import Card1 from './../assets/imgs/cards/challenge-completion.png';
import Card2 from './../assets/imgs/cards/quest-completion.png';
import Card3 from './../assets/imgs/cards/level-completion.png';
import Badge from './../assets/imgs/badges/badge.png';
import CulangexText from './../assets/imgs/badges/culangex-coupon.svg';
import CollectCoupon from './../assets/imgs/buttons/collecet_coupon.png';
import Flight from './../assets/imgs/badges/flight.png';
import Ride from './../assets/imgs/badges/ride.png';
import Tour from './../assets/imgs/badges/tour.png';
import Home from './../assets/imgs/badges/home.png';
import Discount from './../assets/imgs/badges/discount.png';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  useGSAP(() => {
    gsap.from('.foot', {
      translateY: 300,
      rotate: 360,
      stagger: {
        each: 0.05,
        from: 'random'
      },

      scrollTrigger: {
        trigger: ".js-footer",
        start: "top 95%",
      },
      ease: 'back.out',
      duration: 1
    })

    gsap.from('.card', {
      translateY: 200,
      stagger: {
        each: 0.05,
        from: 'start'
      },

      scrollTrigger: {
        trigger: '.card',
        start: 'top bottom'
      },

      ease: 'back.out',
      duration: 1
    })

    gsap.from('.badge', {
      translateY: 200,
      stagger: {
        each: 0.05,
        from: 'start'
      },

      scrollTrigger: {
        trigger: '.badge',
        start: 'top bottom'
      },

      ease: 'back.out',
      duration: 1
    })
  }, []);


  return (
    <>
      <section className="relative">

        <div className="relative">
          <img
            src={FooterBackground}
            alt="Banner Image"
            className="absolute h-full w-full object-cover object-bottom"
          />
          <div className="absolute z-10 bg-black backdrop-blur h-full w-full opacity-60" />
          <div className="absolute top-0 w-full bg-gradient-to-b from-black to-black/0 h-[150px] md:h-[300px]" />
          <div className="relative z-20 pt-20 pb-32 px-6 md:px-14 lg:px-20 2xl:py-40">
            <h2 className='text-center'>
              <h2 className="uppercase text-center js-footer md:text-3xl lg:text-7xl">
                <div className="word">
                  <div className="foot">i</div>
                  <div className="foot">n</div>
                  <div className="foot">-</div>
                  <div className="foot">g</div>
                  <div className="foot">a</div>
                  <div className="foot">m</div>
                  <div className="foot">e</div>

                </div>
                <div className="word">
                  <div className="foot">r</div>
                  <div className="foot">e</div>
                  <div className="foot">w</div>
                  <div className="foot">a</div>
                  <div className="foot">r</div>
                  <div className="foot">d</div>
                  <div className="foot">s</div>
                </div>
              </h2>
            </h2>
            <div className="pt-14">
              <div className="flex items-center gap-6 md:gap-10 lg:gap-20 justify-center">

                <div className="hover:-translate-y-10 hover:-rotate-6 duration-500 ease-in-out">
                  <img src={Card1} alt="Cards" className="2xl:w-72 lg:w-60 md:w-52 w-40 h-auto card" />
                </div>

                <div className="hover:-translate-y-10 hover:-rotate-6 duration-500 ease-in-out">
                  <img src={Card2} alt="Cards" className="2xl:w-72 lg:w-60 md:w-52 w-40 h-auto card" />
                </div>

                <div className="hover:-translate-y-10 hover:-rotate-6 duration-500 ease-in-out">
                  <img src={Card3} alt="Cards" className="2xl:w-72 lg:w-60 md:w-52 w-40 h-auto card" />
                </div>

              </div>

              <div className="bg-[#313556]/35 backdrop-blur-sm max-w-5xl mx-auto rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden">
                <div className="bg-[#252E4F]/45 backdrop-blur-sm px-3 md:px-5 xl:px-12 py-2 flex items-center justify-center md:justify-between flex-wrap">
                  <img src={CulangexText} alt="Coupon Code" className="h-10 lg:h-16 w-auto" />
                  <div className="flex items-start gap-2 lg:gap-3 justify-start mx-auto">
                    <img src={Badge} className="h-10 md:h-12 lg:h-14 w-auto" alt="Badge" />
                    <p className="text-base md:text-lg lg:text-xl mt-1 md:mt-2 text-[#CCCCCC]">
                      Available:
                    </p>
                    <p className="text-base md:text-lg lg:text-xl mt-1 md:mt-2 font-bold">
                      54,000cx points
                    </p>
                  </div>
                  <img src={CollectCoupon} className="h-10 md:h-12 lg:h-16 w-auto hover:-translate-y-1.5 duration-500 ease-in-out" alt="Coupon" />
                </div>
                <div className="py-5 px-8 md:px-10 lg:px-12 flex items-center flex-wrap gap-3 justify-between">
                  <img src={Discount} className="h-20 md:h-24 xl:h-32 w-auto" alt="Discount" />
                  <div className="max-w-xl xl:max-w-2xl">
                    <div className="flex items-center flex-wrap gap-4  justify-between">
                      {
                        [
                          {
                            icon: Flight,
                            text: 'flight'
                          },
                          {
                            icon: Ride,
                            text: 'Rides'
                          },
                          {
                            icon: Tour,
                            text: 'Tour Guides'
                          },
                          {
                            icon: Home,
                            text: 'Hotels'
                          }
                        ].map((items, idx) => (
                          <div key={idx} className="flex items-center justify-start gap-2">
                            <img src={items.icon} alt="icon" className="h-5 md:h-7 w-auto" />
                            <p className="text-base md:text-xl capitalize">{items.text}</p>
                          </div>
                        ))
                      }
                    </div>
                    <p className="font-medium my-2">
                      Earn points in-game and redeem them for discounts on flights, hotels, and tours, to country of the language you are learning. Turn your gaming achievements into real-world travel savings!
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        <Contact />
      </section>



      <section className="px-6 md:px-14 lg:px-20 py-5 bg-[#1A1F37] ">
        <div className="max-w-[1440px] mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-center justify-between">
          <div className="flex items-center justify-center md:justify-start">
            <a href="" className="shrink-0">
              <img src={TwitterBtn} alt="Twitter Icon" className="h-24 w-auto" />
            </a>
            <a href="" className="shrink-0 -ms-5">
              <img src={YoutubeBtn} alt="Youtube Icon" className="h-24 w-auto" />
            </a>
            <a href="" className="shrink-0 -ms-5">
              <img
                src={LinkedInBtn}
                alt="LinkedIn Icon"
                className="h-24 w-auto"
              />
            </a>
            <a href="" className="shrink-0 -ms-5">
              <img
                src={InstagramBtn}
                alt="Instagram Icon"
                className="h-24 w-auto"
              />
            </a>
            <a
              href=""
              className="ms-2 underline text-[#B6F6FF] underline-offset-1 hidden md:inline-block"
            >
              Careers
            </a>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center xl:justify-center md:justify-end -order-last md:order-1">
            <img src={CulangexLogo} alt="Logo Icon" className="w-20 h-auto" />
            <a
              href=""
              className="ms-2 underline text-[#B6F6FF] underline-offset-1 md:hidden block"
            >
              Careers
            </a>
          </div>
          <div className="md:col-span-2 xl:col-span-1 md:order-2">
            <h6 className="text-sm md:text-base lg:text-lg text-center xl:text-end">
              All Rights Reserved {new Date().getFullYear()} | culangex
            </h6>
          </div>
        </div>
      </section>
    </>

  );
}

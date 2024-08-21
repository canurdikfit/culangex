
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCursor from "react-animated-cursor"
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
import Badge1 from './../assets/imgs/badges/badge-1.png';
import Badge2 from './../assets/imgs/badges/badge-2.png';
import Badge3 from './../assets/imgs/badges/badge-3.png';

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
          <div className="relative z-20 pt-20 pb-32 px-6 md:px-14 lg:px-20">
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
              <div className="flex items-center gap-5 justify-center aspect-auto">

                <img src={Card1} alt="Cards" className="lg:w-72 md:w-52 h-auto card" />

                <img src={Card2} alt="Cards" className="lg:w-72 md:w-52 h-auto card" />

                <img src={Card3} alt="Cards" className="lg:w-72 md:w-52 h-auto card" />

              </div>
              <p className='max-w-2xl mx-auto mt-2 text-center'>
                Earn points in-game and redeem them for discounts on flights, hotels, and tours. Turn your gaming achievements into real-world travel savings!
              </p>
              <div className="flex items-center justify-center gap-8 mt-8">
                <img src={Badge1} alt="Badge" className="w-16 h-auto badge" />
                <img src={Badge2} alt="Badge" className="w-16 h-auto badge" />
                <img src={Badge3} alt="Badge" className="w-16 h-auto badge" />
              </div>
            </div>

          </div>

        </div>

        <Contact />

        <div className="hidden lg:block">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            color='182, 246, 255'
            outerAlpha={0.2}
            innerScale={0.7}
            outerStyle={{
              mixBlendMode: 'exclusion'
            }}
            outerScale={1.7}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link'
            ]}
          />
        </div>
      </section>



      <section className="px-6 md:px-14 lg:px-20 py-5 bg-[#1A1F37]">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-center justify-between">
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

import WelocomeBackground from "./../assets/imgs/welcomeBackground.webp";
import VideoDisplayer from "./VideoDisplayer";
import LayerScale from "./../assets/imgs/layerScale.webp";
import LillyMist from "./../assets/imgs/lilly-mist.webp";
import Blurred from "./../assets/imgs/blurred_staff.webp";
import About from "./About";
import Discovery from "./Discovery";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Welcome() {
  useGSAP(() => {
    gsap.to("#blurred", {
      translateX: 0,
      scrollTrigger: {
        trigger: "#blurred",
        start: "top bottom",
        end: 'top 40%',
        scrub: true,
      },
      ease: "power3.in",
    });

    gsap.from('.chars', {
      translateY: 300,
      rotate: 360,
      stagger: {
        each: 0.05,
        from: 'random'
      },

      scrollTrigger: {
        trigger: ".js-word",
        start: "top 95%",
      },
      ease: 'back.out',
      duration: 1
    })
  }, []);

  return (
    <section className="overflow-visible">
      <div className="mt-36 relative xl:min-h-[800px]">
        <div className="absolute z-10 top-0 w-full bg-gradient-to-b from-black/85 to-black/0 h-[150px] md:h-[300px]" />
        <div className="absolute z-10 h-full w-[20%] right-0 md:-right-[5%] bg-[#000000] blur-xl" />
        <div className="absolute z-10 top-[50%] w-full h-auto">
          <img src={LayerScale} alt="Layer Blur" className="h-auto w-screen" />
        </div>
        <div className="absolute z-20 bg-black backdrop-blur h-full w-full opacity-75" />
        <img
          src={WelocomeBackground}
          alt="Banner Image"
          className="absolute h-full w-full object-cover object-bottom"
        />
        <div className="absolute -right-20 md:-right-24 lg:-right-12 z-30 h-full">
          <img
            src={LillyMist}
            alt="Lilly Mist"
            className="h-full w-auto object-contain"
          />
        </div>
        <div
          id="blurred"
          className="absolute left-0 md:-bottom-48 xl:-bottom-[250px] z-30 h-52 -bottom-28 md:h-[300px] xl:h-[500px] -translate-x-60">
          <img
            src={Blurred}
            alt="Blurred"
            className="h-full w-auto object-contain"
          />
        </div>

        <div className="relative z-20">
          <h2 className="js-word">
            <div className="word">
              <div className="chars">W</div>
              <div className="chars">e</div>
              <div className="chars">l</div>
              <div className="chars">c</div>
              <div className="chars">o</div>
              <div className="chars">m</div>
              <div className="chars">e</div>
            </div>
            <div className="word">
              <div className="chars">t</div>
              <div className="chars">o</div>
            </div>
            <div className="word">
              <div className="chars">c</div>
              <div className="chars">u</div>
              <div className="chars">l</div>
              <div className="chars">a</div>
              <div className="chars">n</div>
              <div className="chars">g</div>
              <div className="chars">e</div>
              <div className="chars">x</div>
            </div>
          </h2>
          <VideoDisplayer />
        </div>
      </div>
      <About />
      <Discovery />
    </section>
  );
}

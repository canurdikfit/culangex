import { useGSAP } from "@gsap/react";
import Culangex from "./../assets/imgs/culangex.png";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  useGSAP(() => {
    gsap.to("#logo_resize", {
      scale: 1.5,
      translateY: 0,
      scrollTrigger: {
        trigger: "#nav_bar",
        start: "+=40 top",
        end: "+=120",
        scrub: true,
      },
      ease: "sine.inOut",
    });

    gsap.to("#back_shadow", {
      translateY: 0,
      opacity: 1,

      scrollTrigger: {
        trigger: "#nav_bar",
        start: "+=50",
        end: "+=160",
        scrub: true,
      },
      ease: "sine.inOut",
    });
  }, []);
  return (
    <nav
      id="nav_bar"
      className="fixed top-0 inset-x-0 pt-6 flex items-center justify-center z-50">
      <div
        id="back_shadow"
        className="absolute z-10 top-0 opacity-0 -translate-y-[200px] w-full bg-gradient-to-b from-black to-black/0 h-full 2xl:h-[10vh]"
      />
      <div>
        <img
          src={Culangex}
          alt="Culangex Logo"
          id="logo_resize"
          className="w-20 md:w-28 2xl:w-48 h-auto relative z-20 scale-[2.6] translate-y-[95px] 2xl:translate-y-[20vh] 2xl:scale-[3]"
        />
      </div>
    </nav>
  );
}

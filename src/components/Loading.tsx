import { gsap } from "gsap";
import Background from "./../assets/imgs/culangex_loading_background.webp";
import Logo from "./../assets/imgs/culangex.png";
import Flower from "./../assets/imgs/flower_side.webp";
import Button from "./../assets/imgs/buttons/Explore_button.svg";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Loading() {
  useGSAP(() => {
    const timeline = gsap.timeline({
      repeat: 0, repeatDelay: 0.5
    })
    const handleAfterLoad = () => {
      timeline.to('#culangex', {
        scale: .65,
        opacity: 1,
        duration: 2,
        ease: 'bounce.inOut'
      })

      timeline.to("#flower_vase", {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "sine",
      });

      timeline.to('#culangex', {
        scale: 1,
        opacity: 1,
        duration: 4,
        ease: 'power3.inOut'
      })

      timeline.to('#button', {
        scale: 1,
        opacity: 1,
        delay: 1,
        duration: 1,
        ease: 'bounce.inOut'
      })
    }
    window.onload = handleAfterLoad
  }, []);

  const onCursorEnter = () => {
    gsap.to("#button", {
      scale: 1.2,
      rotate: -4,
      ease: 'elastic'
    });
  };

  const onCursorLeave = () => {
    gsap.to("#button", {
      scale: 1.0,
      rotate: 1,
      ease: 'elastic'
    });
  };

  const onButtonClicked = () => {
    gsap.to("#loader_content", {
      opacity: 0,
      scale: 0,
      duration: 2.5,
      ease: "circ.out",
    });
    gsap.to("#loader", {
      position: 'relative',
      duration: 2,
      delay: 0.4,
      ease: "elastic.out",
    });
  };

  return (
    <section
      id="loader"
      className="h-full w-full fixed place-items-center flex justify-center z-[999] overflow-hidden opacity-100 bg-black"
    >
      <div className="absolute z-40 top-0 w-full bg-gradient-to-b from-black to-black/0 h-[300px]" />
      <div className="absolute z-40 bottom-0 w-full bg-gradient-to-b from-black/0 to-black h-[300px]" />
      <div
        id="loader_content"
        className="absolute z-50 flex flex-col gap-5 md:gap-7 items-center justify-center">
        <img
          src={Logo}
          alt="Culangex Logo"
          id="culangex"
          className="h-auto w-40 md:w-64 shrink-0 scale-0 opacity-0"
        />
        <button
          id="button"
          className="bg-none outline-none border-none max-w-[110px] md:max-w-[150px] shrink-0 opacity-0 scale-0"
          onMouseEnter={onCursorEnter}
          onMouseLeave={onCursorLeave}
          onClick={onButtonClicked}
        >
          <img
            src={Button}
            alt="Explore"
            className="h-auto w-full object-contain object-center"
          />
        </button>
      </div>
      <div className="absolute z-30 h-full w-full">
        <img
          src={Background}
          alt="Culangex Loading Screen"
          className="object-cover h-full w-full lg:object-center md:object-right-bottom"
        />
        <img
          src={Flower}
          alt="Flower Vase"
          id="flower_vase"
          className="absolute bottom-0 max-w-2xl md:max-w-4xl translate-x-[500px] translate-y-[500px] right-0 opacity-0"
        />
      </div>
    </section>
  );
}

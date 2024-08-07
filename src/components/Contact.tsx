import ContactImg from "./../assets/imgs/Contact_face.webp";
import ContactBG from "./../assets/imgs/contact_bg.webp";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ContactForm from "./ContactForm";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  useGSAP(() => {
    gsap.from('.contaxt', {
      translateY: 300,
      rotate: 360,
      stagger: {
        each: 0.05,
        from: 'random'
      },

      scrollTrigger: {
        trigger: ".js-contact",
        start: "top 95%",
      },
      ease: 'back.out',
      duration: 1
    })
  }, []);


  return (
    <div className="relative z-20">
      <div className="relative z-20 grid md:grid-cols-2 items-center w-full mt-20 md:mt-40 pb-5">
        <div className="hidden md:block">
          <div className="relative md:min-h-[400px] xl:min-h-[550px]">
            <img
              src={ContactImg}
              alt="Contact"
              className="absolute right-0 -bottom-[35%]"
            />
          </div>
        </div>
        <div className="grid lg:gap-20 md:gap-16 gap-14 pl-6 md:pl-0 pr-6 md:pr-14 lg:pr-20">
          <h2 className="uppercase text-left js-contact">
            <div className="word">
              <div className="contaxt">c</div>
              <div className="contaxt">o</div>
              <div className="contaxt">n</div>
              <div className="contaxt">t</div>
              <div className="contaxt">a</div>
              <div className="contaxt">c</div>
              <div className="contaxt">t</div>
            </div>
            <div className="word">
              <div className="contaxt">u</div>
              <div className="contaxt">s</div>
            </div>
          </h2>
          <ContactForm />
        </div>
      </div>
      <div className="absolute z-10 w-screen md:h-[84%] h-[87%] xl:h-[75%] left-0 bottom-0">
        <img
          src={ContactBG}
          alt="Contact"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

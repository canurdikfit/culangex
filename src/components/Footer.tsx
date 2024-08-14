import CyndyImg from './../assets/imgs/cyndy.webp';
import AnimatedCursor from "react-animated-cursor"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FooterBackground from './../assets/imgs/FooterBg.webp';

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
  }, []);


  return (
    <section className="relative">
      <div className="absolute z-10 bg-black backdrop-blur h-full w-full opacity-60" />
      <img
        src={FooterBackground}
        alt="Banner Image"
        className="absolute h-full w-full object-cover object-center"
      />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center justify-between relative z-20 px-6 md:px-14 lg:px-20 pt-20">

        <div>
          <h2>
            <h2 className="uppercase text-left js-footer md:text-3xl lg:text-7xl">
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
                <div className="foot">t</div>
                <div className="foot">i</div>
                <div className="foot">c</div>
                <div className="foot">k</div>
                <div className="foot">e</div>
                <div className="foot">t</div>
                <div className="foot">s</div>
              </div>
            </h2>
            <h2 className="uppercase text-left js-footer md:text-3xl lg:text-7xl">
              <div className="word">
                <div className="foot">&</div>
              </div>
              <div className="word">
                <div className="foot">c</div>
                <div className="foot">u</div>
                <div className="foot">r</div>
                <div className="foot">r</div>
                <div className="foot">e</div>
                <div className="foot">n</div>
                <div className="foot">c</div>
                <div className="foot">i</div>
                <div className="foot">e</div>
                <div className="foot">s</div>
              </div>
            </h2>
          </h2>
          <p className='max-w-lg mt-2'>
            Generate unique discount codes to redeem gift cards, discounts on flights, hotels, Uber, and tour guides.
          </p>
        </div>

        <div className="relative md:min-h-[400px] xl:min-h-[550px]">
          <img
            src={CyndyImg}
            alt="Contact"
            className="md:absolute right-0 lg:-bottom-0 md:-bottom-0"
          />
        </div>
      </div>






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
  );
}

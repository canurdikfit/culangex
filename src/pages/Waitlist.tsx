import NightLight from './../assets/imgs/join_wallet.webp';
import Culangex from './../assets/imgs/culangex.png';
import WaitlistForm from "../components/WaitlistForm";
import PalmRight from './../assets/imgs/palmtree.gif';
import CyAlt from './../assets/imgs/cyndy-alt.webp';
import Artist from './../assets/imgs/Contact_face.webp';
import LightPool from "./../assets/imgs/light_pool.webp";
import Light from "./../assets/imgs/light-2.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCursor from 'react-animated-cursor';

export default function Waitlist() {
    useGSAP(() => {

        const waitlistTimeline = gsap.timeline({
            repeat: 0, repeatDelay: 0
        })
        const handleAfterLoad = () => {
            gsap.fromTo("#grow-1", {
                scale: 1,
                opacity: 0,
            }, {
                scale: 1.5,
                opacity: 0.04,
                yoyo: true,
                duration: 2,
                repeat: -1,
                ease: 'power1.inOut'
            });
            gsap.fromTo("#grow-2", {
                scale: 1,
                opacity: 0,
            }, {
                scale: 2.5,
                yoyo: true,
                opacity: 0.04,
                duration: 2,
                repeat: -1,
                ease: 'power1.inOut'
            });
            gsap.fromTo("#grow-3", {
                scale: 1,
                opacity: 0,
            }, {
                scale: 3.5,
                opacity: 0.04,
                yoyo: true,
                duration: 2,
                repeat: -1,
                ease: 'power1.inOut'
            });

            waitlistTimeline.from("#waitlistpool", {
                y: 200,
                duration: 1.5,
                ease: 'circ'
            });

            waitlistTimeline.from("#waitlistlight", {
                opacity: 0,
                duration: 1.5,
                ease: 'circ',
            })

            waitlistTimeline.from('#suscribe', {
                scale: 0,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.inOut'
            })
        }
        window.onload = handleAfterLoad
    }, []);


    return (
        <section className='h-[100dvh] w-screen overflow-hidden relative px-6 md:px-12 lg:px-16'>

            <div className="h-[100dvh] flex items-center justify-center">
                <div className="absolute inset-0 ">
                    <img src={NightLight} alt="Night Light" className="h-full w-full object-cover object-center" />
                    <div className="bg-black/70 absolute inset-0 backdrop-blur-sm z-10 md:z-0" />
                </div>

                <img src={PalmRight} alt="Palm" className="xl:h-[500px] h-[350px] w-auto absolute xl:-bottom-[200px] -bottom-[130px] -left-14 md:z-20" />


                <div className="absolute z-10 bottom-0 w-full bg-gradient-to-b from-black/0 to-black h-[150px] md:h-[300px]" />
                <img src={Artist} alt="Artist" className="2xl:w-[650px] 2xl:right-10 xl:w-[500px] w-[370px] h-auto absolute -bottom-[100px] md:z-20 -right-4" />
                <img src={CyAlt} alt="Artist" className="2xl:h-[650px] xl:h-[430px] h-[320px] w-auto absolute bottom-0 right-0 md:z-20" />

                <div
                    id="waitlistpool"
                    className="absolute -right-[18%] -bottom-32 h-fit xl:w-fit 2xl:-bottom-[20%] 2xl:-right-[17%] md:w-[400px] hidden lg:block"
                >
                    <div className="relative md:h-[700px] 2xl:h-[1200px]">
                        <img
                            src={LightPool}
                            alt="Light Pool"
                            className="h-full w-auto object-contain"
                        />
                        <img
                            src={Light}
                            alt="Light"
                            id="waitlistlight"
                            className="xl:h-96 md:h-60 w-auto absolute xl:top-[9%] md:top-[18%] 2xl:left-[3%] xl:-left-[3%] z-20 opacity-40"
                        />
                    </div>
                </div>


                <div className="relative z-30 flex flex-col items-center w-full opacity-100 scale-100" id="suscribe">
                    <div className="mb-4 2xl:mb-10 md:h-32 md:w-32 h-24 w-24 flex items-center justify-center relative">
                        <img src={Culangex} alt="Culangex Logo" className="w-16 md:w-24 2xl:w-48 h-auto" />
                        <div id="grow-1" className="absolute h-full w-full scale-[1.5] 2xl:scale-[2.0] rounded-full bg-[#D9D9D9] opacity-[4%]" />
                        <div id="grow-2" className="absolute h-full w-full scale-[2.5] 2xl:scale-[3.0] rounded-full bg-[#D9D9D9] opacity-[4%]" />
                        <div id="grow-3" className="absolute h-full w-full scale-[3.5] 2xl:scale-[4.0] rounded-full bg-[#D9D9D9] opacity-[4%]" />
                    </div>
                    <h3 className="mb-8">Join The Waitlist</h3>

                    <WaitlistForm />
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
    )
}

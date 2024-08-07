import NightLight from './../assets/imgs/join_wallet.webp';
import { useLocation, useNavigate } from 'react-router-dom';
import PalmRight from './../assets/imgs/palm-right.webp';
import Aje from './../assets/imgs/AjeCap.webp';
import Artist from './../assets/imgs/Contact_face.webp';
import LightPool from "./../assets/imgs/light_pool.webp";
import Light from "./../assets/imgs/light-2.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MaleIcon from './../assets/imgs/Male Memojis.png';

export default function Congratulation() {
    const location = useLocation();
    const navigate = useNavigate();
    useGSAP(() => {

        const waitlistTimeline = gsap.timeline({
            repeat: 0, repeatDelay: 0
        })

        gsap.fromTo("#grow-1", {
            scale: 1,
            opacity: 0,
        }, {
            scale: 1.5,
            opacity: 1,
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
            opacity: 1,
            duration: 2,
            repeat: -1,
            ease: 'power1.inOut'
        });
        gsap.fromTo("#grow-3", {
            scale: 1,
            opacity: 0,
        }, {
            scale: 3.5,
            opacity: 1,
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


        // setTimeout(() => {
        //     navigate('/')
        // }, 12000);
    }, []);


    return (
        <section className='h-screen w-screen overflow-hidden relative px-6 md:px-12 lg:px-16'>

            <div className="h-screen flex items-start justify-center pt-[220px] md:items-center lg:items-start lg:pt-24">
                <div className="absolute inset-0">
                    <img src={NightLight} alt="Night Light" className="h-full w-full object-cover object-center" />
                    <div className="bg-black/70 absolute inset-0 backdrop-blur-sm" />
                </div>

                <img src={PalmRight} alt="Palm" className="xl:h-[500px] h-[350px] w-auto absolute xl:-bottom-[200px] -bottom-[130px] -left-14" />

                <img src={Aje} alt="Artist" className="xl:h-[400px] h-[300px] w-auto absolute bottom-0 z-10 -right-[120px]" />
                <img src={Artist} alt="Artist" className="xl:w-[500px] w-[370px] h-auto absolute -bottom-[200px] z-10 right-10" />

                <div
                    id="waitlistpool"
                    className="absolute -right-[15%] md:-bottom-[150px] xl:-bottom-[200px] h-full xl:w-fit md:w-[400px] hidden lg:block"
                >
                    <div className="relative md:h-[700px] ">
                        <img
                            src={LightPool}
                            alt="Light Pool"
                            className="h-full w-auto object-contain"
                        />
                        <img
                            src={Light}
                            alt="Light"
                            id="waitlistlight"
                            className="xl:h-96 md:h-60 w-auto absolute xl:top-[9%] md:top-[18%]  xl:-left-[3%] z-20 opacity-40"
                        />
                    </div>
                </div>


                <div className="relative z-10 flex flex-col items-center w-full opacity-100 scale-100" id="suscribe">
                    <div className="mb-2 md:h-60 md:w-60 h-40 w-40 flex items-center justify-center relative">
                        <img src={MaleIcon} alt="Icon" className="w-full h-full object-contain object-center" />
                        <div id="grow-1" className="absolute md:h-32 md:w-32 h-24 w-24 scale-[1.5] rounded-full bg-[#D9D9D9]/5" />
                        <div id="grow-2" className="absolute md:h-32 md:w-32 h-24 w-24 scale-[2.5] rounded-full bg-[#D9D9D9]/5" />
                        <div id="grow-3" className="absolute md:h-32 md:w-32 h-24 w-24 scale-[3.5] rounded-full bg-[#D9D9D9]/5" />
                    </div>
                    <h3 className="mb-3">We’ve added you to <br />
                        our waitlist!</h3>
                    <p>We’ll let you know when we launch</p>
                    <button
                        className="bg-[#747C94] shadow-inner shadow-black/25 flex items-center px-5 rounded-lg py-2.5 mt-3">
                        {location.state.email}
                    </button>
                </div>
            </div>
        </section>
    )
}

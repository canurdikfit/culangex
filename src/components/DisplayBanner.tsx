import { Link } from 'react-router-dom';
import DisplayBannerBg from './../assets/imgs/displayBanner.webp';
import PalmTree from './../assets/imgs/palm-right.webp';
import LightPool from "./../assets/imgs/light_pool.webp";
import Light from "./../assets/imgs/light-2.png";
import LightPurple from './../assets/imgs/light-purple.png';
import DisplayArtists from './DisplayArtists';
import JoinButton from "./../assets/imgs/buttons/join_waitlist.png";
import ScrollDown from "./../assets/imgs/buttons/scrollDown.svg";
import Bridge from './../assets/imgs/bridge.png';

export default function DisplayBanner() {
    return (
        <section className="relative min-h-[750px] md:min-h-[850px] lg:min-h-[900px] flex items-start justify-center overflow-hidden">
            <div className="absolute h-full w-full">
                <img
                    src={DisplayBannerBg}
                    alt="Banner Image"
                    className="absolute h-full w-full object-cover object-bottom"
                />
                <div className='absolute h-[900px] w-[900px] -top-[350px] -right-[500px] rounded-full bg-[#7735FF] blur-[400px] opacity-75' />
                <div className="absolute top-0 w-full bg-gradient-to-b from-black/85 to-black/0 h-[150px] md:h-[300px]" />
                <div className="absolute gradient_overlay h-full w-full" />
                <div className='absolute md:h-80 md:w-60 rotate-45 md:-left-28 md:-top-28 h-40 w-28 -left-12 -top-10'>
                    <img src={PalmTree} alt="Palm Tree" className='h-full w-full object-contain object-center' />
                </div>
                <div className="absolute lg:h-[750px] md:h-[460px] lg:-right-64 md:-right-[20%] h-[450px] -right-60 -bottom-5 md:bottom-8 lg:-bottom-28 xl:-bottom-10">
                    <img
                        src={LightPool}
                        alt="Light Pool"
                        className="h-full w-auto object-contain"
                    />
                    <img
                        src={LightPurple}
                        alt="Light"
                        id="waitlistlight"
                        className="xl:h-96 md:h-60 h-40 w-auto z-20 absolute top-[9%] xl:-left-[2%] lg:left-[3%] md:-left-3 left-1.5 opacity-[8%] blur"
                    />
                    <img
                        src={Light}
                        alt="Light"
                        id="waitlistlight"
                        className="xl:h-96 md:h-60 h-40 w-auto absolute z-20 top-[9%] xl:-left-[2%] lg:left-[3%] md:-left-3 left-1.5 opacity-35"
                    />
                </div>
                <div className="absolute left-0 h-[50%] w-72 bottom-0 hidden md:block">
                    <img
                        src={Bridge}
                        alt="Bridge"
                        className="h-full w-full object-cover object-top"
                    />
                </div>

                <DisplayArtists />

            </div>
            <div className="relative flex z-20 flex-col justify-between min-h-[750px] md:min-h-[850px] lg:min-h-[1000px] pt-[250px] md:pt-[300px]">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-5 ">
                        <h1>
                            Fun way to learn languages, <br /> and Explore culture.
                        </h1>
                        <Link to={'/join_waitlist'}>
                            <button
                                className="bg-none outline-none border-none max-w-[140px] md:max-w-[150px] xl:max-w-[200px] btnHov"
                            >
                                <img
                                    src={JoinButton}
                                    alt="Join Waitlist"
                                    className="h-auto w-full object-contain object-center"
                                />
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <a
                        href="#scroll"
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
    )
}

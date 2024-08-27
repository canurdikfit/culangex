import { Link } from 'react-router-dom';
import DisplayBannerBg from './../assets/imgs/displayBanner.webp';
import PalmTree from './../assets/imgs/palmtree.gif';
import LightPool from "./../assets/imgs/light_pool.webp";
import Light from "./../assets/imgs/light-2.png";
import LightPurple from './../assets/imgs/light-purple.png';
import DisplayArtists from './DisplayArtists';
import JoinButton from "./../assets/imgs/buttons/join_waitlist.png";
import ScrollDown from "./../assets/imgs/buttons/scrollDown.svg";
import Bridge from './../assets/imgs/bridge.png';

export default function DisplayBanner() {
    return (
        <section className="relative min-h-[750px] md:min-h-[850px] 2xl:h-[1600px] flex items-start justify-center overflow-hidden">

            {/* Absolute Background Start*/}

            <div className="absolute h-full w-full">

                {/* Background Image Start*/}

                <img
                    src={DisplayBannerBg}
                    alt="Banner Image"
                    className="absolute h-full w-full object-cover object-bottom"
                />

                {/* Background Image End */}

                {/* Background Shadows Start*/}


                <div className='absolute h-[900px] w-[900px] -top-[350px] -right-[500px] rounded-full bg-[#7735FF] blur-[400px] opacity-75' />
                <div className="absolute top-0 w-full bg-gradient-to-b from-black/85 to-black/0 h-[150px] md:h-[300px]" />
                <div className="absolute gradient_overlay h-full w-full" />
                {/* Background Shadows End*/}
                {/*Palm Tree Start*/}
                <div className='absolute rotate-45 2xl:-left-40 2xl:-top-32 md:-left-48 md:-top-48 2xl:scale-150 md:h-auto md:w-auto h-80 w-80 -left-40 -top-28'>
                    <img src={PalmTree} alt="Palm Tree" className='h-full w-full object-contain object-center' />
                </div>

                {/*Palm Tree End*/}

                {/* Street Lights Start*/}

                <div className="mx-auto absolute w-full h-full overflow-hidden">
                    <div className="absolute 2xl:h-[1200px] 2xl:-right-[16%] xl:h-[850px] lg:h-3/4 md:h-[60%] xl:-right-[21.2%] md:-right-[28%] h-[450px] -right-60 -bottom-5 md:bottom-8 lg:-bottom-28 xl:-bottom-10">
                        <img
                            src={LightPool}
                            alt="Light Pool"
                            className="h-full w-auto object-contain"
                        />
                        <img
                            src={LightPurple}
                            alt="Light"
                            id="waitlistlight"
                            className="h-3/4 w-auto absolute top-[8%] 2xl:-left-[12%] md:-left-[8%] left-1.5 opacity-[28%] blur"
                        />
                        <img
                            src={Light}
                            alt="Light"
                            id="waitlistlight"
                            className="h-3/4 w-auto absolute 2xl:-left-[12%]s top-[8%] md:-left-[8%] left-1.5 opacity-35"
                        />
                    </div>

                </div>

                {/* Street Lights End */}

                {/* Bridge Start*/}

                <div className="absolute left-0 h-[50%] lg:h-[55%] bottom-20 hidden md:block">
                    <img
                        src={Bridge}
                        alt="Bridge"
                        className="h-full w-full object-contain object-top"
                    />
                </div>

                {/* Bridge End*/}

                {/* Artist & Flags  */}
                <DisplayArtists />

            </div>

            {/* Text Content  */}
            <div className="relative flex z-40 flex-col justify-between min-h-[750px] md:min-h-[850px] lg:min-h-[950px] 2xl:h-[1600px] pt-[250px] md:pt-[300px] 2xl:pt-[37vh]">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-5">
                        <h1>
                            Fun way to learn languages, <br /> and Explore culture.
                        </h1>
                        <Link to={'/join_waitlist'}>
                            <button
                                className="bg-none outline-none border-none max-w-[140px] md:max-w-[150px] xl:max-w-[200px] 2xl:max-w-[320px] btnHov"
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
                                className="h-16 md:h-20 w-16 md:w-20  2xl:w-28 2xl:h-28 object-contain object-center"
                            />
                            <div className="absolute h-full w-full top-0 rounded-full border border-dashed border-white/50 scale-[0.7] group-hover:scale-50 group-hover:rotate-180 transition-all ease-in-out duration-500" />
                        </div>
                        <span className="text-[10px] md:text-xs xl:text-sm 2xl:text-xl group-hover:-translate-y-2 transition-transform ease-in-out duration-500">
                            Scroll Down To Discover More
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}

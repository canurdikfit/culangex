import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpanishArt from './../assets/imgs/Artists/Spanish-Lady.png';
import USA from './../assets/imgs/flags/usa.png';
import FrenchArt from './../assets/imgs/Artists/French-Man.png';
import France from './../assets/imgs/flags/france.png';
import YorubaArt from './../assets/imgs/Artists/Yoruba-Character.png';
import Nigeria from './../assets/imgs/flags/nigeria.png';
import SpanishArt2 from './../assets/imgs/Artists/Spanish-Lady2.png';
import Spain from './../assets/imgs/flags/Spain.png';
import Zulu from './../assets/imgs/Artists/Warior-character.png';
import Zambia from './../assets/imgs/flags/zambia.png';

gsap.registerPlugin(ScrollTrigger);
export default function DisplayArtists() {
    useGSAP(() => {
        gsap.from('.artist', {
            translateY: 200,
            stagger: {
                each: 0.2,
                from: 'start'
            },

            scrollTrigger: {
                trigger: '.artist',
                start: 'top bottom'
            },
            ease: 'back.inOut',
            duration: 2
        })
    }, [])

    return (
        <>
            <div className='absolute bottom-20 inset-x-0'>
                <div className="relative flex flex-nowrap justify-center">
                    <Artists
                        image={SpanishArt}
                        flag={USA}
                        lang={'english'}
                        position={'opacity-0 left-[30%]'}
                        margin={'hidden md:block left-[50%] xl:left-[30%]'} />

                    <Artists
                        image={FrenchArt}
                        flag={France}
                        lang={'french'}
                        position={'opacity-0 inset-x-0'}
                        margin={'left-[45%] md:left-[23%] xl:left-[10%]'} />

                    <Artists
                        image={YorubaArt}
                        flag={Nigeria}
                        lang={'yoruba'}
                        position={'opacity-0 inset-x-0'}
                        margin={'left-[5%] md:left-[3%] xl:-left-[3%]'} />

                    <Artists
                        image={SpanishArt2}
                        flag={Spain}
                        lang={'spanish'}
                        position={'opacity-0 inset-x-0'}
                        margin={'-left-[40%] md:-left-[20%]'} />

                    <Artists
                        image={Zulu}
                        flag={Zambia}
                        lang={'zulu'}
                        position={'opacity-0 inset-x-0'}
                        margin={' hidden md:block md:-left-[43%] xl:-left-[35%]'} />
                    <div className="absolute h-32 w-full bottom-0 inset-x-0 bg-black blur-3xl z-10" />
                </div>
            </div>

            <div className="absolute bottom-24 w-full bg-gradient-to-b from-black/0 to-black h-[150px] lg:h-[300px]" />
            <div className="absolute h-24 w-full bottom-0 inset-x-0 bg-black z-10" />

            <div className='absolute bottom-20 inset-x-0 z-50 overflow-hidden'>
                <div className="relative flex flex-nowrap justify-center">
                    <Artists
                        image={SpanishArt}
                        flag={USA}
                        imageOpacity={'opacity-0'}
                        lang={'english'}
                        position={'left-[30%]'}
                        margin={'hidden md:block left-[50%] xl:left-[30%]'} />

                    <Artists
                        image={FrenchArt}
                        flag={France}
                        imageOpacity={'opacity-0'}
                        lang={'french'}
                        position={'inset-x-0'}
                        margin={'left-[45%] md:left-[23%] xl:left-[10%]'} />

                    <Artists
                        image={YorubaArt}
                        imageOpacity={'opacity-0'}
                        flag={Nigeria}
                        lang={'yoruba'}
                        position={'inset-x-0'}
                        margin={'left-[5%] md:left-[3%] xl:-left-[3%]'} />

                    <Artists
                        image={SpanishArt2}
                        flag={Spain}
                        imageOpacity={'opacity-0'}
                        lang={'spanish'}
                        position={'inset-x-0'}
                        margin={'-left-[40%] md:-left-[20%]'} />

                    <Artists
                        image={Zulu}
                        flag={Zambia}
                        imageOpacity={'opacity-0'}
                        lang={'zulu'}
                        position={'inset-x-0'}
                        margin={' hidden md:block md:-left-[43%] xl:-left-[35%]'} />
                </div>
            </div>
        </>
    )
}


const Artists = (props: any) => (
    <div className={`h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] w-auto ${props.margin ? props.margin : ''} relative shrink-0 artist`}>
        <img src={props.image} alt="Culangex Art" className={`h-full w-auto object-contain ${props.imageOpacity ? props.imageOpacity : ''} object-center`} />
        <div className={`absolute ${props.position} bottom-20 z-50 flex flex-col items-center justify-center gap-2`}>
            <img src={props.flag} alt="Country Flag" className='h-7 md:h-10 w-auto' />
            <h6 className='text-center capitalize'>{props.lang}</h6>
        </div>
    </div>
)
import { useEffect, useState } from 'react';
import Back from './../assets/imgs/buttons/backtotop.png';


export default function BackToTop() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed bottom-28 md:bottom-20 ${scrollPosition >= 220 ? 'translate-y-0' : 'translate-y-60'} left-5 z-40 transition-transform duration-300 ease-linear`}>
            <a
                href="#top"
                className="group flex items-center justify-center gap-1 md:gap-4"
            >
                <div className="relative">
                    <img src={Back} alt="Back to Top" className="h-16 md:h-20 2xl:h-32 w-auto object-contain object-center" />
                    <div className="absolute h-full w-full top-0 rounded-full border border-dashed border-white/50 scale-[1] group-hover:scale-90 group-hover:rotate-180 transition-all ease-in-out duration-500" />
                </div>
                <span className="text-[10px] 2xl:text-2xl md:text-xs xl:text-sm group-hover:-translate-x-2 transition-transform ease-in-out duration-500">
                    Back to Top
                </span>
            </a>
        </div>
    )
}

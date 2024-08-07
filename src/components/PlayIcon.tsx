import PlayIconBtn from './../assets/imgs/buttons/playIcon.svg';

export default function PlayIcon() {
    return (
        <button>
            <div className='relative group z-40'>
                <img src={PlayIconBtn} alt="Play Icon Button" className='h-20 w-20 object-contain object-center group-hover:rotate-[360deg] transition-transform ease-in-out duration-500' />
                <div className="absolute h-full w-full top-0 rounded-full border border-dashed border-white/50 scale-110 group-hover:scale-75 group-hover:rotate-180 transition-transform ease-in-out duration-500" />
            </div>
        </button>
    )
}

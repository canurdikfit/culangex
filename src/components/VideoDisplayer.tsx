import VideoCover from "./../assets/imgs/VideoPlayer.webp";
import ReactPlayer from 'react-player'
import PlayIcon from "./PlayIcon";

export default function VideoDisplayer() {
  return (
    <div className="px-8 md:px-20 pt-8 md:pt-20 pb-20">
      <div className="max-w-5xl relative mx-auto">
        <div className="absolute h-[75%] z-20 border-2 border-[#8899C2] bg-black top-[8%] left-[4.2%] right-[4.8%]">
          <ReactPlayer
            url='https://youtu.be/zrW2Zap7R4k?si=UOhrVtbfw-y4UEvg'
            height={'100%'}
            width={'100%'}
            playing={true}
            light={true}
            controls={false}
            playsinline={true}
            playIcon={<PlayIcon />}
            config={{
              youtube: {
                playerVars: {
                  showinfo: 0,
                  playsinline: 1,
                  autoplay: 0
                }
              }
            }}
          />
        </div>
        <img
          src={VideoCover}
          alt="Video Player Cover"
          className="h-full w-full object-contain object-left-top"
        />
      </div>
    </div>
  );
}

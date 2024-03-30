"use client";

import { Pause, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useAudio } from "react-use";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type Props = {
    imageSrc: string;
    audioLink: any;
    audioDur?: number;
    title: string;
    desc: string;
    date: string;
}

export const BlogInfo = ({
    imageSrc,
    audioLink,
    audioDur,
    title,
    desc,
    date
}: Props) => {

    let assetUrl;
    
    if(audioLink){
        const {_ref: ref} = audioLink;
        const assetRefParts = ref?.split('-');
        if(assetRefParts){
          const id = assetRefParts[1];
          const format = assetRefParts[2];
          assetUrl = `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${format}`
        }
    }

    const [audio, state, audioControllers] = useAudio({src: assetUrl ? assetUrl : "/audio/coming_soon.mp3"});

    const [isPlaying, setIsPlaying] = useState(false);

    const handleControl = () => {
        if (isPlaying) {
            audioControllers.pause();
            setIsPlaying(false);
        } else {
            audioControllers.play();
            setIsPlaying(true);
        }
    }

    const duration = audioDur ? audioDur : 2;
    const progress = state.time / duration * 100 || 0;

    return (
        <>
            {audio}
            <div className="sm:w-full bg-gray-500/40 shadow-lg p-4 rounded-lg sm:ml-4 gap-2 sm:gap-4 flex flex-col w-[95%] relative">
                <Image
                    unoptimized
                    src={imageSrc}
                    alt="mm"
                    width={50}
                    height={50}
                    className="h-[70%] w-full rounded-lg"
                />
                <h1 className="text-center mt-2 text-lg sm:text-xl font-semibold">
                    {title}
                </h1>
                <h2 className="text-center text-sm sm:text-base">
                    {desc}
                </h2>
                <div className="relative h-14 flex items-center justify-center">
                  <div className="hidden sm:flex items-center justify-center">
                    <Image
                        unoptimized
                        width={5}
                        height={5}
                        className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
                        src="/om-tekade.png"
                        alt="Simon Lewis"
                    />
                    <p className="ml-4 w-fit text-sm sm:text-base">
                        <strong className="block font-medium text-black">
                            Om Tekade
                        </strong>
                        <span className="text-sm text-black">
                            {date}
                        </span>
                    </p>
                  </div>
                    <div className="flex items-center justify-center flex-col sm:absolute right-2">
                      <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                          <CircularProgressbar 
                              value={progress} 
                              className="z-0"
                              styles={buildStyles({
                                pathColor: "rgb(234 88 12)"
                              })}
                          />
                          <div
                              onClick={handleControl}
                              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black text-white flex items-center justify-center bg-opacity-90 border-black border-2 cursor-pointer z-10"
                          >
                              {isPlaying ? 
                                <Pause className="h-4 w-4 sm:h-5 sm:w-5"/> 
                                : 
                                <Play className="h-4 w-4 sm:h-5 sm:w-5"/>
                              }
                          </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {audioDur ? 
                          `${Math.ceil(duration/60)} min read`
                        : 
                          "Comming soon"
                        }
                      </p>
                    </div>
                </div>
            </div>
        </>
    )
}

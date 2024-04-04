"use client";

import React, { useRef, useState } from "react";
import { useContentByIdQuery } from "@/queries/contents";
import Rewind from "@/assets/rewind.svg";
import Forward from "@/assets/forward.svg";
import Pause from "@/assets/pause.svg";
import Play from "@/assets/play.svg";
import Image from "next/image";
import Loading from "@/components/fallbacks/Loading";
import Error from "@/components/fallbacks/Error";

interface Props {
  id: string;
}

const Client = ({ id }: Props) => {
  const { data, isError, isLoading } = useContentByIdQuery({
    id,
    expand: "news,author",
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
    }
  };

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <>
      <audio ref={audioRef} className="w-full" src={data?.mediaUrl} controls />
      <div className="mt-[40px] flex justify-center gap-x-8">
        <button onClick={handleRewind}>
          <Image src={Rewind} alt="logo" width={20} height={20} />
        </button>

        <button onClick={handlePlayPause}>
          <Image
            src={isPlaying ? Pause : Play}
            alt="logo"
            width={20}
            height={20}
          />
        </button>

        <button onClick={handleForward}>
          <Image src={Forward} alt="logo" width={20} height={20} />
        </button>
      </div>
    </>
  );
};

export default Client;

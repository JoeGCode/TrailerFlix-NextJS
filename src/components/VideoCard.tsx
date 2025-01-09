import { MovieVideo } from "@/types/movie";
import Image from "next/image";
import React from "react";
import placeholder from "@/utils/shimmerPlaceholderImage";

type VideoCardType = {
  video: MovieVideo;
  clickHandler?: (video: MovieVideo) => void;
};

function VideoCard({ video, clickHandler = () => {} }: VideoCardType) {
  return (
    <div
      className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2 cursor-pointer relative inline-block"
      onClick={() => clickHandler(video)}
    >
      <div className="relative aspect-video overflow-hidden rounded-md flex flex-col justify-end text-center">
        <div className="w-full h-full absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 z-10">
          <p className="flex justify-center items-center h-full px-2">
            <span className="block w-full truncate whitespace-normal">
              {video.name}
            </span>
          </p>
        </div>
        <Image
          src={`https://i.ytimg.com/vi/${video.key}/maxresdefault.jpg`}
          alt={video.name}
          fill
          sizes="(max-width: 640px) 50vw,
            (max-width: 768px) 33vw,
            (max-width: 1024px) 25vw,
            20vw"
          style={{ objectFit: "contain" }}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default VideoCard;

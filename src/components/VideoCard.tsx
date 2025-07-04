import { MovieVideoType } from "@/types/tmdb-types";
import placeholder from "@/utils/shimmerPlaceholderImage";
import Image from "next/image";

type VideoCardType = {
  video: MovieVideoType;
  clickHandler?: (video: MovieVideoType) => void;
};

function VideoCard({ video, clickHandler = () => {} }: VideoCardType) {
  return (
    <div
      className="relative inline-block w-1/2 cursor-pointer px-2 sm:w-1/3 md:w-1/4 lg:w-1/5"
      onClick={() => clickHandler(video)}
    >
      <div className="relative flex aspect-video flex-col justify-end overflow-hidden rounded-md text-center">
        <div className="absolute inset-0 z-10 h-full w-full bg-black/80 opacity-0 hover:opacity-100">
          <p className="flex h-full items-center justify-center px-2">
            <span className="block w-full truncate whitespace-normal">
              {video.name}
            </span>
          </p>
        </div>
        <Image
          src={`https://i.ytimg.com/vi/${video.key}/maxresdefault.jpg`}
          alt={video.name ?? "Video thumbnail"}
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

import { MovieCast } from "@/types/movie";
import { TMDB_IMAGE_BASE_URL } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import placeholder from "@/utils/shimmerPlaceholderImage";

type CastCardType = {
  castMember: MovieCast;
};

function CastCard({ castMember }: CastCardType) {
  return (
    <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 px-2 relative inline-block">
      <div className="relative aspect-[3/4] overflow-hidden rounded-md flex flex-col justify-end text-center">
        <div className="w-full h-full absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 z-10">
          <p className="flex justify-center items-center h-full px-2">
            <span className="block w-full truncate whitespace-normal">
              {castMember.name}
            </span>
          </p>
        </div>
        <Image
          src={TMDB_IMAGE_BASE_URL + castMember.profile_path}
          alt={castMember.name}
          fill
          sizes="(max-width: 640px) 50vw,
          (max-width: 768px) 33vw,
          (max-width: 1024px) 25vw,
          (max-width: 1280px) 20vw,
          17vw"
          style={{ objectFit: "cover" }}
          placeholder={placeholder}
        />
      </div>
      <p className="text-center">{castMember.name}</p>
      <p className="text-center">{castMember.character}</p>
    </div>
  );
}

export default CastCard;

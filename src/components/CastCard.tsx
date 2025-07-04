import { MovieCastType } from "@/types/tmdb-types";
import { TMDB_IMAGE_BASE_URL } from "@/utils/constants/tmdb";
import placeholder from "@/utils/shimmerPlaceholderImage";
import Image from "next/image";

type CastCardType = {
  castMember: MovieCastType;
};

function CastCard({ castMember }: CastCardType) {
  return (
    <div className="relative inline-block w-1/3 px-2 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-[14.3%] 2xl:w-[12.5%] 3xl:w-[11.1%]">
      <div className="relative flex aspect-[326/490] flex-col justify-end overflow-hidden rounded-md text-center">
        <div className="absolute inset-0 z-10 h-full w-full bg-black/80 opacity-0 hover:opacity-100">
          <p className="flex h-full items-center justify-center px-2">
            <span className="block w-full truncate whitespace-normal">
              {castMember.name}
            </span>
          </p>
        </div>
        <Image
          src={TMDB_IMAGE_BASE_URL + castMember.profile_path}
          alt={castMember.name ?? "Cast member"}
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
      <div className="flex flex-col items-center justify-center truncate whitespace-normal p-2">
        <p className="text-center">{castMember.name}</p>
        <p className="text-center">({castMember.character})</p>
      </div>
    </div>
  );
}

export default CastCard;

import { MovieCast } from "@/types/movie";
import { TMDB_IMAGE_BASE_URL } from "@/utils/constants/tmdb";
import placeholder from "@/utils/shimmerPlaceholderImage";
import Image from "next/image";

type CastCardType = {
  castMember: MovieCast;
};

function CastCard({ castMember }: CastCardType) {
  return (
    <div className="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-[14.3%] 2xl:w-[12.5%] 3xl:w-[11.1%] px-2 relative inline-block">
      <div className="relative aspect-[326/490] overflow-hidden rounded-md flex flex-col justify-end text-center">
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
      <div className="flex flex-col items-center justify-center p-2 truncate whitespace-normal">
        <p className="text-center">{castMember.name}</p>
        <p className="text-center">({castMember.character})</p>
      </div>
    </div>
  );
}

export default CastCard;

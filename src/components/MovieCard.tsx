import { MovieCardType } from "@/types/custom-types";
import { TMDB_IMAGE_BASE_URL } from "@/utils/constants/tmdb";
import placeholder from "@/utils/shimmerPlaceholderImage";
import Image from "next/image";

type MovieCardProps = {
  movie: MovieCardType;
  clickHandler?: (movie: MovieCardType) => void;
};

function MovieCard({ movie, clickHandler = () => {} }: MovieCardProps) {
  return (
    <div
      key={movie.id}
      className="relative inline-block w-full cursor-pointer px-2"
      onClick={() => clickHandler(movie)}
    >
      <div className="relative flex aspect-[250/374] flex-col justify-end overflow-hidden rounded-md text-center">
        <div className="absolute inset-0 z-10 h-full w-full bg-black/80 opacity-0 hover:opacity-100">
          <p className="flex h-full items-center justify-center px-2">
            <span className="block w-full truncate whitespace-normal">
              {movie.title}
            </span>
          </p>
        </div>
        <Image
          src={TMDB_IMAGE_BASE_URL + movie.poster_path}
          alt={movie.title ?? `Movie poster for movie with TMDB ID ${movie.id}`}
          fill
          sizes="(max-width: 640px) 25vw,
          (max-width: 768px) 20vw,
          (max-width: 1024px) 16vw,
          13vw"
          style={{ objectFit: "contain" }}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default MovieCard;

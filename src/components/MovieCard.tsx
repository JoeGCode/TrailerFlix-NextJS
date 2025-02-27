import { Movie } from "@/types/movie";
import Image from "next/image";
import React from "react";
import placeholder from "@/utils/shimmerPlaceholderImage";
import { TMDB_IMAGE_BASE_URL } from "@/utils/constants";

type MovieCardType = {
  movie: Movie;
  clickHandler?: (movie: Movie) => void;
};

function MovieCard({ movie, clickHandler = () => {} }: MovieCardType) {
  return (
    <div
      key={movie.id}
      className="w-full px-2 cursor-pointer relative inline-block"
      onClick={() => clickHandler(movie)}
    >
      <div className="relative aspect-[250/374] overflow-hidden rounded-md flex flex-col justify-end text-center">
        <div className="w-full h-full absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 z-10">
          <p className="flex justify-center items-center h-full px-2">
            <span className="block w-full truncate whitespace-normal">
              {movie.title}
            </span>
          </p>
        </div>
        <Image
          src={TMDB_IMAGE_BASE_URL + movie.poster_path}
          alt={movie.title}
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

import { Movie } from "@/types/movie";
import Image from "next/image";
import React from "react";
import placeholder from "@/utils/shimmerPlaceholderImage";

type MovieCardType = {
  movie: Movie;
  clickHandler?: (movie: Movie) => void;
};

function MovieCard({ movie, clickHandler = () => {} }: MovieCardType) {
  return (
    <div
      key={movie.id}
      className="w-1/4 sm:w-1/5 md:w-1/6 lg:w-[12.5%] px-2 cursor-pointer relative inline-block"
      onClick={() => clickHandler(movie)}
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-md flex flex-col justify-end text-center">
        <div className="w-full h-full absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 z-10">
          <p className="flex justify-center items-center h-full px-2">
            <span className="block w-full truncate whitespace-normal">
              {movie.title}
            </span>
          </p>
        </div>
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
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

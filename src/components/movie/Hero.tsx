import { MovieDetails } from "@/types/movie";
import Image from "next/image";
import React from "react";
import placeholder from "@/utils/shimmerPlaceholderImage";
import { TMDB_IMAGE_BASE_URL } from "@/utils/constants";

type HeroType = {
  movie: MovieDetails;
  logoSrc: string | undefined;
};

function Hero({ movie, logoSrc }: HeroType) {
  return (
    <>
      <section className="z-[-1] relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full overflow-hidden">
        {/* Image Backdrop */}
        <div className="relative w-[70%] h-full float-end">
          <Image
            src={TMDB_IMAGE_BASE_URL + movie.backdrop_path}
            alt={movie.title}
            fill
            className="object-cover"
            placeholder={placeholder}
          />
        </div>
        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-30% via-black to-transparent" />

        {/* Content */}
        <div className="absolute z-10 flex h-full flex-col items-start justify-start p-4 sm:p-6 md:p-12">
          <div className="relative flex items-start justify-start w-full h-[12vh]">
            {logoSrc ? (
              <Image
                src={TMDB_IMAGE_BASE_URL + logoSrc}
                alt={movie.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ height: "100%", width: "auto" }}
              />
            ) : (
              <h1 className="mb-2 sm:mb-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
                {movie.title}
              </h1>
            )}
          </div>
          <p className="text-base md:text-lg w-full py-4">
            {new Date(movie.release_date).getFullYear()} &bull;{" "}
            {movie.genres.map((genre) => genre.name).join(" \u2022 ")} &bull;{" "}
            {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
          </p>
          <div className="flex-1 flex flex-col justify-center items-center">
            <p className="max-w-md md:text-lg lg:text-xl xl:text-2xl">
              {movie.overview}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

import { My_List_Type } from "@/types/db";
import { MovieDetails } from "@/types/movie";
import { TMDB_IMAGE_BASE_URL } from "@/utils/constants/tmdb";
import placeholder from "@/utils/shimmerPlaceholderImage";
import Image from "next/image";
import AddToListButton from "../AddToListButton";

type HeroType = {
  movie: MovieDetails;
  logoSrc: string | undefined;
};

function Hero({ movie, logoSrc }: HeroType) {
  return (
    <>
      <section className="relative h-[60vh] w-full overflow-hidden sm:h-[70vh] md:h-[80vh]">
        {/* Image Backdrop */}
        <div className="relative float-end h-full w-[70%]">
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
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black via-30% to-transparent" />

        {/* Content */}
        <div className="absolute z-10 flex h-full flex-col items-start justify-start p-4 sm:p-6 md:p-12">
          <div className="relative flex h-[12vh] w-full items-start justify-start">
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
              <h1 className="mb-2 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-5xl lg:text-6xl">
                {movie.title}
              </h1>
            )}
          </div>
          <p className="w-full py-4 text-base md:text-lg">
            {new Date(movie.release_date).getFullYear()} &bull;{" "}
            {movie.genres.map((genre) => genre.name).join(" \u2022 ")} &bull;{" "}
            {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
          </p>
          <div className="flex flex-1 flex-col items-center justify-center">
            <p className="max-w-md md:text-lg lg:text-xl xl:text-2xl">
              {movie.overview}
            </p>
            <div className="my-4 flex w-full">
              <AddToListButton itemId={movie.id} type={My_List_Type.MOVIE} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

"use client";
import { MovieCardType } from "@/types/custom-types";
import { MovieVideoArray, MovieVideoResponse } from "@/types/tmdb-types";
import { TMDB_IMAGE_BASE_URL } from "@/utils/constants/tmdb";
import { ensureResults } from "@/utils/ensureResults";
import placeholder from "@/utils/shimmerPlaceholderImage";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdPlayCircle } from "react-icons/md";
import YoutubeModal from "../YoutubeModal";

type HeroType = {
  movie: MovieCardType;
};

function Hero({ movie }: HeroType) {
  const [videos, setVideos] = useState<MovieVideoArray>([]);
  const [showModal, setShowModal] = useState(false);
  const heroVideo =
    videos.find(
      (video) =>
        video.official &&
        video.site === "YouTube" &&
        video.type === "Trailer" &&
        video.key,
    ) ||
    videos[0] ||
    null;
  const showWatchButton = heroVideo ? true : false;

  useEffect(() => {
    setShowModal(false);
    const fetchVideos = async () => {
      try {
        const res = await fetch(`/api/movie-videos?movieId=${movie.id}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.statusText}`);
        }
        const result: MovieVideoResponse = await res.json();
        const videoResults = ensureResults(result.results);
        setVideos(videoResults);
      } catch (error) {
        console.error("Failed to fetch movie videos:", error);
      }
    };

    fetchVideos();
  }, [movie]);

  const openModal = () => setShowModal(true);

  return (
    <section className="relative h-[60vh] w-full overflow-hidden sm:h-[70vh] md:h-[80vh]">
      {/* Image Backdrop */}
      <Image
        src={TMDB_IMAGE_BASE_URL + movie.backdrop_path}
        alt={movie.title ?? `Movie poster for movie with TMDB ID ${movie.id}`}
        fill
        className="object-cover"
        placeholder={placeholder}
      />
      {/* Black Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      {/* Content */}
      <div className="absolute bottom-0 z-10 flex h-full flex-col items-start justify-end p-4 sm:p-6 md:p-12">
        <h1 className="mb-2 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-5xl lg:text-6xl">
          {movie.title}
        </h1>
        <p className="mb-4 line-clamp-3 max-w-md text-sm sm:line-clamp-none sm:text-base md:text-lg lg:text-xl">
          {movie.overview}
        </p>
        <div className="flex gap-4">
          <Link href={`/movie/${movie.id}`}>
            <button className="rounded bg-white bg-opacity-40 p-4 font-bold text-white transition hover:bg-opacity-50 sm:text-xl">
              More Info
            </button>
          </Link>
          {showWatchButton && (
            <button
              onClick={openModal}
              className="flex items-center gap-2 rounded bg-white p-4 font-bold text-black transition hover:bg-opacity-80 sm:text-xl"
            >
              <MdPlayCircle size={20} />
              Watch Trailer
            </button>
          )}
        </div>
      </div>
      {/* Modal */}
      {heroVideo && heroVideo.key && (
        <YoutubeModal
          showModal={showModal}
          videoKey={heroVideo.key}
          closeModal={() => setShowModal(false)}
        />
      )}
    </section>
  );
}

export default Hero;

"use client";
import { Movie, MovieVideo, MovieVideoResults } from "@/types/movie";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import placeholder from "@/utils/shimmerPlaceholderImage";
import { MdPlayCircle } from "react-icons/md";
import Link from "next/link";
import YoutubeModal from "../YoutubeModal";
import { TMDB_IMAGE_BASE_URL } from "@/utils/constants";

type HeroType = {
  movie: Movie;
};

function Hero({ movie }: HeroType) {
  const [videos, setVideos] = useState<MovieVideo[]>([]);
  const [showModal, setShowModal] = useState(false);
  const heroVideo =
    videos.find(
      (video) =>
        video.official && video.site === "YouTube" && video.type === "Trailer"
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
        const result: MovieVideoResults = await res.json();
        setVideos(result.results);
      } catch (error) {
        console.error("Failed to fetch movie videos:", error);
      }
    };

    fetchVideos();
  }, [movie]);

  const openModal = () => setShowModal(true);

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {/* Image Backdrop */}
      <Image
        src={TMDB_IMAGE_BASE_URL + movie.backdrop_path}
        alt={movie.title}
        fill
        className="object-cover"
        placeholder={placeholder}
      />
      {/* Black Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      {/* Content */}
      <div className="absolute bottom-0 z-10 flex h-full flex-col items-start justify-end p-4 sm:p-6 md:p-12">
        <h1 className="mb-2 sm:mb-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
          {movie.title}
        </h1>
        <p className="mb-4 max-w-md text-sm sm:text-base md:text-lg lg:text-xl line-clamp-3 sm:line-clamp-none">
          {movie.overview}
        </p>
        <div className="flex gap-4">
          <Link href={`/movie/${movie.id}`}>
            <button className="rounded bg-white bg-opacity-40 p-4 sm:text-xl font-bold text-white transition hover:bg-opacity-50">
              More Info
            </button>
          </Link>
          {showWatchButton && (
            <button
              onClick={openModal}
              className="flex gap-2 items-center rounded bg-white p-4 sm:text-xl font-bold text-black transition hover:bg-opacity-80"
            >
              <MdPlayCircle size={20} />
              Watch Trailer
            </button>
          )}
        </div>
      </div>
      {/* Modal */}
      {heroVideo && (
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

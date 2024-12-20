"use client";
import { Movie, MovieVideo, MovieVideoResults } from "@/types/movie";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import placeholder from "@/utils/shimmerPlaceholderImage";
import { MdPlayCircle } from "react-icons/md";
import Link from "next/link";

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
  const closeModal = () => setShowModal(false);

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {/* Image Backdrop */}
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
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
          {showWatchButton && (
            <button
              onClick={openModal}
              className="flex gap-2 items-center rounded bg-white px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base font-bold text-black transition hover:bg-opacity-80"
            >
              <MdPlayCircle size={20} />
              Watch Trailer
            </button>
          )}
          <Link href={`/movie/${movie.id}`}>
            <button className="rounded bg-white bg-opacity-40 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base font-bold text-white transition hover:bg-opacity-50">
              More Info
            </button>
          </Link>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black bg-opacity-50 p-4 pt-32 sm:p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-[90vw] sm:max-w-4xl rounded-lg bg-black p-2 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 bg-black rounded-md px-2 py-1 text-sm sm:text-base hover:text-gray-300"
            >
              Close
            </button>
            <div className="aspect-video">
              {heroVideo ? (
                <iframe
                  src={`https://www.youtube.com/embed/${heroVideo.key}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              ) : (
                <p className="flex h-full items-center justify-center text-white">
                  No trailer available
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;

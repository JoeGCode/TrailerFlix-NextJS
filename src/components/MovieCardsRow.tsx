"use client";
import { Movie } from "@/types/movie";
import React, { useLayoutEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import MovieCard from "./MovieCard";

type MoviesRowType = {
  movies: Movie[];
  title: string;
  clickHandler?: (movie: Movie) => void;
};

function MovieCardsRow({
  movies,
  title,
  clickHandler = () => {},
}: MoviesRowType) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  function updateButtonVisibility() {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }
  useLayoutEffect(() => {
    const currentRef = rowRef.current;
    if (currentRef) {
      updateButtonVisibility();
      currentRef.addEventListener("scroll", updateButtonVisibility);
      return () => {
        if (currentRef) {
          currentRef.removeEventListener("scroll", updateButtonVisibility);
        }
      };
    }
  }, [movies]);

  function scroll(direction: "left" | "right") {
    if (rowRef.current) {
      const { clientWidth, scrollLeft } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  }

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 ml-2">{title}</h2>
      {movies && (
        <div className="relative flex items-center">
          {showLeftButton && (
            <button
              className="absolute left-0 z-20 bg-black/80 text-white p-2 h-full"
              onClick={() => scroll("left")}
            >
              <MdChevronLeft size={24} />
            </button>
          )}
          <div
            ref={rowRef}
            className="w-full overflow-x-scroll whitespace-nowrap scroll-smooth relative"
            style={{ scrollbarWidth: "none" }}
          >
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                clickHandler={clickHandler}
              />
            ))}
          </div>
          {showRightButton && (
            <button
              className="absolute right-0 z-20 bg-black/80 text-white p-2 h-full"
              onClick={() => scroll("right")}
            >
              <MdChevronRight size={24} />
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default MovieCardsRow;

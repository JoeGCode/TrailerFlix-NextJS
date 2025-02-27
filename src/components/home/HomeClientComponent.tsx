"use client";
import React, { useState } from "react";
import { MovieResults } from "@/types/movie";
import Hero from "./Hero";
import ScrollableRow from "../ScrollableRow";
import MovieCard from "../MovieCard";
import ScrollableRowMovieCardWrapper from "../ScrollableRowMovieCardWrapper";

type HomeClientComponentType = {
  popular: MovieResults;
  topRated: MovieResults;
  upcoming: MovieResults;
};
function HomeClientComponent({
  popular,
  topRated,
  upcoming,
}: HomeClientComponentType) {
  const [heroMovie, setHeroMovie] = useState(popular.results[0]);
  return (
    <div>
      <Hero movie={heroMovie} />
      <ScrollableRow title="Popular">
        {popular.results.map((movie) => (
          <ScrollableRowMovieCardWrapper key={movie.id}>
            <MovieCard movie={movie} clickHandler={setHeroMovie} />
          </ScrollableRowMovieCardWrapper>
        ))}
      </ScrollableRow>
      <ScrollableRow title="Top Rated">
        {topRated.results.map((movie) => (
          <ScrollableRowMovieCardWrapper key={movie.id}>
            <MovieCard movie={movie} clickHandler={setHeroMovie} />
          </ScrollableRowMovieCardWrapper>
        ))}
      </ScrollableRow>
      <ScrollableRow title="Upcoming">
        {upcoming.results.map((movie) => (
          <ScrollableRowMovieCardWrapper key={movie.id}>
            <MovieCard movie={movie} clickHandler={setHeroMovie} />
          </ScrollableRowMovieCardWrapper>
        ))}
      </ScrollableRow>
    </div>
  );
}

export default HomeClientComponent;

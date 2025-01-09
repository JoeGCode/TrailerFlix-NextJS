"use client";
import React, { useState } from "react";
import { MovieResults } from "@/types/movie";
import Hero from "./Hero";
import ScrollableRow from "../ScrollableRow";
import MovieCard from "../MovieCard";

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
          <MovieCard key={movie.id} movie={movie} clickHandler={setHeroMovie} />
        ))}
      </ScrollableRow>
      <ScrollableRow title="Top Rated">
        {topRated.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} clickHandler={setHeroMovie} />
        ))}
      </ScrollableRow>
      <ScrollableRow title="Upcoming">
        {upcoming.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} clickHandler={setHeroMovie} />
        ))}
      </ScrollableRow>
    </div>
  );
}

export default HomeClientComponent;

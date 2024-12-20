"use client";
import React, { useState } from "react";
import { MovieResults } from "@/types/movie";
import MovieCardsRow from "../MovieCardsRow";
import Hero from "./Hero";

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
      <MovieCardsRow
        movies={popular.results}
        title="Popular"
        clickHandler={setHeroMovie}
      />
      <MovieCardsRow
        movies={topRated.results}
        title="Top Rated"
        clickHandler={setHeroMovie}
      />
      <MovieCardsRow
        movies={upcoming.results}
        title="Upcoming"
        clickHandler={setHeroMovie}
      />
    </div>
  );
}

export default HomeClientComponent;

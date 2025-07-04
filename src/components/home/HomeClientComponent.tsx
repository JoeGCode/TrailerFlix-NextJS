"use client";
import { MovieCardType } from "@/types/custom-types";
import { MovieListArray } from "@/types/tmdb-types";
import { mapMovieListToMovieCard } from "@/utils/mappers/mapToMovieCard";
import { useState } from "react";
import MovieCard from "../MovieCard";
import ScrollableRow from "../ScrollableRow";
import ScrollableRowMovieCardWrapper from "../ScrollableRowMovieCardWrapper";
import Hero from "./Hero";

type HomeClientComponentType = {
  popular: MovieListArray;
  topRated: MovieListArray;
  upcoming: MovieListArray;
};
function HomeClientComponent({
  popular,
  topRated,
  upcoming,
}: HomeClientComponentType) {
  const [heroMovie, setHeroMovie] = useState<MovieCardType>(
    mapMovieListToMovieCard(popular[0]),
  );
  return (
    <div>
      <Hero movie={heroMovie} />
      <ScrollableRow title="Popular">
        {popular.map((popularMovie) => {
          const movie = mapMovieListToMovieCard(popularMovie);
          return (
            <ScrollableRowMovieCardWrapper key={movie.id}>
              <MovieCard movie={movie} clickHandler={setHeroMovie} />
            </ScrollableRowMovieCardWrapper>
          );
        })}
      </ScrollableRow>
      <ScrollableRow title="Top Rated">
        {topRated.map((topRatedMovie) => {
          const movie = mapMovieListToMovieCard(topRatedMovie);
          return (
            <ScrollableRowMovieCardWrapper key={movie.id}>
              <MovieCard movie={movie} clickHandler={setHeroMovie} />
            </ScrollableRowMovieCardWrapper>
          );
        })}
      </ScrollableRow>
      <ScrollableRow title="Upcoming">
        {upcoming.map((upcomingMovie) => {
          const movie = mapMovieListToMovieCard(upcomingMovie);
          return (
            <ScrollableRowMovieCardWrapper key={movie.id}>
              <MovieCard movie={movie} clickHandler={setHeroMovie} />
            </ScrollableRowMovieCardWrapper>
          );
        })}
      </ScrollableRow>
    </div>
  );
}

export default HomeClientComponent;

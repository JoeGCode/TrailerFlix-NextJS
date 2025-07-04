"use client";
import { MovieCardType } from "@/types/custom-types";
import { MovieSearchArray } from "@/types/tmdb-types";
import { mapMovieSearchToMoviecard } from "@/utils/mappers/mapToMovieCard";
import { useRouter } from "next/navigation";
import CardGrid from "../CardGrid";
import MovieCard from "../MovieCard";

type SearchResultsClientComponentType = {
  searchResults: MovieSearchArray;
};
function SearchResultsClientComponent({
  searchResults,
}: SearchResultsClientComponentType) {
  const { push } = useRouter();
  function clickHandler(movie: MovieCardType) {
    push(`/movie/${movie.id}`);
  }
  return (
    <CardGrid>
      {searchResults.map((searchMovie) => {
        const movie = mapMovieSearchToMoviecard(searchMovie);
        return (
          <MovieCard key={movie.id} movie={movie} clickHandler={clickHandler} />
        );
      })}
    </CardGrid>
  );
}

export default SearchResultsClientComponent;

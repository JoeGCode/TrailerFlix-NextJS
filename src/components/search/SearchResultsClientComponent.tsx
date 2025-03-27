"use client";
import { Movie, MovieResults } from "@/types/movie";
import { useRouter } from "next/navigation";
import CardGrid from "../CardGrid";
import MovieCard from "../MovieCard";

type SearchResultsClientComponentType = {
  searchResults: MovieResults;
};
function SearchResultsClientComponent({
  searchResults,
}: SearchResultsClientComponentType) {
  const { push } = useRouter();
  function clickHandler(movie: Movie) {
    push(`/movie/${movie.id}`);
  }
  return (
    <CardGrid>
      {searchResults.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} clickHandler={clickHandler} />
      ))}
    </CardGrid>
  );
}

export default SearchResultsClientComponent;

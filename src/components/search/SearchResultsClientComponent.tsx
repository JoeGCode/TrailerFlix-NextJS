"use client";
import { Movie, MovieResults } from "@/types/movie";
import { useRouter } from "next/navigation";
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
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 max-w-screen-xl my-0 mx-auto">
      {searchResults.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} clickHandler={clickHandler} />
      ))}
    </div>
  );
}

export default SearchResultsClientComponent;

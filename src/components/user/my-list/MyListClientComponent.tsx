"use client";
import CardGrid from "@/components/CardGrid";
import MovieCard from "@/components/MovieCard";
import { Movie } from "@/types/movie";
import { useRouter } from "next/navigation";

type Props = {
  movies: Movie[];
};

function MyListClientComponent({ movies }: Props) {
  const { push } = useRouter();
  function clickHandler(movie: Movie) {
    push(`/movie/${movie.id}`);
  }
  return (
    <CardGrid title="Movies">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} clickHandler={clickHandler} />
      ))}
    </CardGrid>
  );
}

export default MyListClientComponent;

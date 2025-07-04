"use client";
import CardGrid from "@/components/CardGrid";
import MovieCard from "@/components/MovieCard";
import { MovieCardType } from "@/types/custom-types";
import { MovieDetailsResponse } from "@/types/tmdb-types";
import { mapMovieDetailsToMovieCard } from "@/utils/mappers/mapToMovieCard";
import { useRouter } from "next/navigation";

type Props = {
  movies: MovieDetailsResponse[];
};

function MyListClientComponent({ movies }: Props) {
  const { push } = useRouter();
  function clickHandler(movie: MovieCardType) {
    push(`/movie/${movie.id}`);
  }
  return (
    <CardGrid title="Movies">
      {movies.map((userMovie) => {
        const movie = mapMovieDetailsToMovieCard(userMovie);
        return (
          <MovieCard key={movie.id} movie={movie} clickHandler={clickHandler} />
        );
      })}
    </CardGrid>
  );
}

export default MyListClientComponent;

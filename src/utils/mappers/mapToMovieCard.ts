import { MovieCardType } from "@/types/custom-types";
import {
  MovieDetailsType,
  MovieListType,
  MovieSearchType,
} from "@/types/tmdb-types";

export function mapMovieListToMovieCard(movie: MovieListType): MovieCardType {
  return {
    id: movie.id,
    title: movie.title ?? `Movie with TMDB ID ${movie.id}`,
    poster_path: movie.poster_path ?? "",
    image_alt: movie.title ?? `Movie with TMDB ID ${movie.id}`,
    overview: movie.overview ?? "This is one of the movies of all time",
    backdrop_path: movie.backdrop_path ?? "",
  };
}

export function mapMovieSearchToMoviecard(
  movie: MovieSearchType,
): MovieCardType {
  return {
    id: movie.id,
    title: movie.title ?? `Movie with TMDB ID ${movie.id}`,
    poster_path: movie.poster_path ?? "",
    image_alt: movie.title ?? `Movie with TMDB ID ${movie.id}`,
    overview: movie.overview ?? "This is one of the movies of all time",
    backdrop_path: movie.backdrop_path ?? "",
  };
}

export function mapMovieDetailsToMovieCard(
  movie: MovieDetailsType,
): MovieCardType {
  return {
    id: movie.id,
    title: movie.title ?? `Movie with TMDB ID ${movie.id}`,
    poster_path: movie.poster_path ?? "",
    image_alt: movie.title ?? `Movie with TMDB ID ${movie.id}`,
    overview: movie.overview ?? "This is one of the movies of all time",
    backdrop_path: movie.backdrop_path ?? "",
  };
}

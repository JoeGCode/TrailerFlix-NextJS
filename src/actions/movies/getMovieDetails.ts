"use server";

import { MovieDetails } from "@/types/movie";
import { getOptions, TMDB_API_BASE_URL } from "@/utils/constants/tmdb";

export async function getMovieDetails(movieId: number): Promise<MovieDetails> {
  const response = await fetch(
    `${TMDB_API_BASE_URL}/movie/${movieId}?language=en-US`,
    getOptions
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie");
  }
  return response.json();
}

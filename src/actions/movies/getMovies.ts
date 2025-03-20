"use server";

import { MovieCategory, MovieResults } from "@/types/movie";
import { getOptions, TMDB_API_BASE_URL } from "@/utils/constants/tmdb";

export async function getMovies(
  category: MovieCategory
): Promise<MovieResults> {
  const response = await fetch(
    `${TMDB_API_BASE_URL}/movie/${category}?language=en-US&page=1`,
    getOptions
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  return response.json();
}

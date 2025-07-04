"use server";

import { MovieSearchResponse } from "@/types/tmdb-types";
import { getOptions, TMDB_API_BASE_URL } from "@/utils/constants/tmdb";

export async function searchMovies(
  query: string,
): Promise<MovieSearchResponse> {
  const response = await fetch(
    `${TMDB_API_BASE_URL}/search/movie?query=${query}&language=en-US&page=1`,
    getOptions,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  }
  return response.json();
}

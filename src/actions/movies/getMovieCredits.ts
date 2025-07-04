"use server";

import { MovieCreditResponse } from "@/types/tmdb-types";
import { getOptions, TMDB_API_BASE_URL } from "@/utils/constants/tmdb";

export async function getMovieCredits(
  movieId: number,
): Promise<MovieCreditResponse> {
  const response = await fetch(
    `${TMDB_API_BASE_URL}/movie/${movieId}/credits`,
    getOptions,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie credits");
  }
  return response.json();
}

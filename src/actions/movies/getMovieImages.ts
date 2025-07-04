"use server";

import { MovieImageResponse } from "@/types/tmdb-types";
import { getOptions, TMDB_API_BASE_URL } from "@/utils/constants/tmdb";

export async function getMovieImages(
  movieId: number,
): Promise<MovieImageResponse> {
  const response = await fetch(
    `${TMDB_API_BASE_URL}/movie/${movieId}/images`,
    getOptions,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie images");
  }
  return response.json();
}

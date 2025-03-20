"use server";

import { MovieImages } from "@/types/movie";
import { getOptions, TMDB_API_BASE_URL } from "@/utils/constants/tmdb";

export async function getMovieImages(movieId: number): Promise<MovieImages> {
  const response = await fetch(
    `${TMDB_API_BASE_URL}/movie/${movieId}/images`,
    getOptions
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie images");
  }
  return response.json();
}

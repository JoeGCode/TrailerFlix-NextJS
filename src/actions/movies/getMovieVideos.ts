"use server";

import { MovieVideoResponse } from "@/types/tmdb-types";
import { getOptions, TMDB_API_BASE_URL } from "@/utils/constants/tmdb";

export async function getMovieVideos(
  movieId: number,
): Promise<MovieVideoResponse> {
  const response = await fetch(
    `${TMDB_API_BASE_URL}/movie/${movieId}/videos?language=en-US`,
    getOptions,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie videos");
  }
  return response.json();
}

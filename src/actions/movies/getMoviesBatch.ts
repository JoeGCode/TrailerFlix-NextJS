"use server";

import { getMovieDetails } from "./getMovieDetails";

export async function getMoviesBatch(movieIds: number[]) {
  if (!movieIds || movieIds.length === 0) return [];

  const fetchPromises = movieIds.map((id) => getMovieDetails(id));

  const results = await Promise.all(fetchPromises);

  return results;
}

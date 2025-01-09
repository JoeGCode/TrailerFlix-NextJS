import {
  MovieCredits,
  MovieDetails,
  MovieImages,
  MovieResults,
  MovieVideoResults,
} from "@/types/movie";

const API_TOKEN = process.env.API_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

const getOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

type MovieCategory = "popular" | "top_rated" | "upcoming";

export async function getMovies(
  category: MovieCategory
): Promise<MovieResults> {
  const response = await fetch(
    `${BASE_URL}/movie/${category}?language=en-US&page=1`,
    getOptions
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  return response.json();
}

export async function getMovieVideos(
  movieId: number
): Promise<MovieVideoResults> {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/videos?language=en-US`,
    getOptions
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie videos");
  }
  return response.json();
}

export async function getMovieDetails(movieId: number): Promise<MovieDetails> {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?language=en-US`,
    getOptions
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie");
  }
  return response.json();
}

export async function getMovieImages(movieId: number): Promise<MovieImages> {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/images`,
    getOptions
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie images");
  }
  return response.json();
}

export async function getMovieCredits(movieId: number): Promise<MovieCredits> {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits`,
    getOptions
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie credits");
  }
  return response.json();
}

const API_TOKEN = process.env.API_TOKEN;

export const TMDB_API_BASE_URL = "https://api.themoviedb.org/3";
export const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export const getOptions: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
  next: { revalidate: 60 * 60 * 24 }, // Revalidate the data every 24 hours
};

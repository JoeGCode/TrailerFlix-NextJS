import { paths } from "./tmdb-schema";

export type MovieCategory = "popular" | "top_rated" | "upcoming";

// Movie Lists
export type MovieListResponse =
  paths["/3/movie/popular"]["get"]["responses"]["200"]["content"]["application/json"];

export type MovieListArray = NonNullable<MovieListResponse["results"]>;
export type MovieListType = MovieListArray[0];

// Movie Details
export type MovieDetailsResponse =
  paths["/3/movie/{movie_id}"]["get"]["responses"]["200"]["content"]["application/json"];
export type MovieDetailsType = NonNullable<MovieDetailsResponse>;

// Movie Videos
export type MovieVideoResponse =
  paths["/3/movie/{movie_id}/videos"]["get"]["responses"]["200"]["content"]["application/json"];

export type MovieVideoArray = NonNullable<MovieVideoResponse["results"]>;
export type MovieVideoType = MovieVideoArray[0];

// Movie Images
export type MovieImageResponse =
  paths["/3/movie/{movie_id}/images"]["get"]["responses"]["200"]["content"]["application/json"];
export type MovieImageType = NonNullable<MovieImageResponse>;

// Movie Credits
export type MovieCreditResponse =
  paths["/3/movie/{movie_id}/credits"]["get"]["responses"]["200"]["content"]["application/json"];
export type MovieCreditType = NonNullable<MovieCreditResponse>;

export type MovieCastArray = NonNullable<MovieCreditType["cast"]>;
export type MovieCastType = MovieCastArray[0];

// Movie Search
export type MovieSearchResponse =
  paths["/3/search/movie"]["get"]["responses"]["200"]["content"]["application/json"];

export type MovieSearchArray = NonNullable<MovieSearchResponse["results"]>;
export type MovieSearchType = MovieSearchArray[0];

export default function movieDetailsToMovie(movieDetails: MovieDetails): Movie {
  return {
    adult: movieDetails.adult,
    backdrop_path: movieDetails.backdrop_path,
    genre_ids: movieDetails.genres.map((genre) => genre.id),
    id: movieDetails.id,
    original_language: movieDetails.original_language,
    original_title: movieDetails.original_title,
    overview: movieDetails.overview,
    popularity: movieDetails.popularity,
    poster_path: movieDetails.poster_path,
    release_date: movieDetails.release_date,
    title: movieDetails.title,
    video: movieDetails.video,
    vote_average: movieDetails.vote_average,
    vote_count: movieDetails.vote_count,
  };
}

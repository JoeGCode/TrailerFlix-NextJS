import CastCard from "@/components/CastCard";
import Hero from "@/components/movie/Hero";
import VideosAndModal from "@/components/movie/VideosAndModal";
import ScrollableRow from "@/components/ScrollableRow";
import {
  getMovieCredits,
  getMovieDetails,
  getMovieImages,
  getMovieVideos,
} from "@/lib/tmdb";
import isNumber from "@/utils/isNumber";
import React from "react";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const movieId = (await params).id;
  if (!movieId || !isNumber(movieId)) return null;

  const idNumber = Number(movieId);

  const [movieDetails, movieImages, movieVideos, movieCredits] =
    await Promise.all([
      getMovieDetails(idNumber),
      getMovieImages(idNumber),
      getMovieVideos(idNumber),
      getMovieCredits(idNumber),
    ]);
  const logoSrc = movieImages.logos.find(
    (logo) => logo.iso_639_1 === "en"
  )?.file_path;
  const youtubeVideos = movieVideos.results.filter(
    (video) =>
      video.site === "YouTube" && video.official && video.iso_639_1 === "en"
  );
  const cast = movieCredits.cast.filter(
    (c) => c.known_for_department === "Acting" && c.character && c.profile_path
  );
  return (
    <>
      <Hero movie={movieDetails} logoSrc={logoSrc} />
      <VideosAndModal videos={youtubeVideos} />
      <ScrollableRow title="Cast">
        {cast.map((c) => (
          <CastCard key={c.id} castMember={c} />
        ))}
      </ScrollableRow>
    </>
  );
}

export default Page;

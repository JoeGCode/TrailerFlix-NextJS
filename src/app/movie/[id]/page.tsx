import { getMovieCredits } from "@/actions/movies/getMovieCredits";
import { getMovieDetails } from "@/actions/movies/getMovieDetails";
import { getMovieImages } from "@/actions/movies/getMovieImages";
import { getMovieVideos } from "@/actions/movies/getMovieVideos";
import CastCard from "@/components/CastCard";
import Hero from "@/components/movie/Hero";
import VideosAndModal from "@/components/movie/VideosAndModal";
import ScrollableRow from "@/components/ScrollableRow";
import { ensureResults } from "@/utils/ensureResults";
import isNumber from "@/utils/isNumber";

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
  const logoSrc = movieImages.logos?.find(
    (logo) => logo.iso_639_1 === "en",
  )?.file_path;
  const movieVideoResults = ensureResults(movieVideos.results);
  const youtubeVideos = movieVideoResults.filter(
    (video) =>
      video.site === "YouTube" &&
      video.official &&
      video.iso_639_1 === "en" &&
      !!video.key,
  );
  const castResults = ensureResults(movieCredits.cast);
  const cast = castResults.filter(
    (c) => c.known_for_department === "Acting" && c.character && c.profile_path,
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

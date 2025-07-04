import { getMovies } from "@/actions/movies/getMovies";
import HomeClientComponent from "@/components/home/HomeClientComponent";
import Loader from "@/components/Loader";
import { ensureResults } from "@/utils/ensureResults";

export default async function HomeServerComponent() {
  const [popular, topRated, upcoming] = await Promise.all([
    getMovies("popular"),
    getMovies("top_rated"),
    getMovies("upcoming"),
  ]);
  const topRatedResults = ensureResults(topRated.results);
  const upcomingResults = ensureResults(upcoming.results);
  return (
    <>
      {popular.results ? (
        <HomeClientComponent
          popular={popular.results}
          topRated={topRatedResults}
          upcoming={upcomingResults}
        />
      ) : (
        <Loader />
      )}
    </>
  );
}

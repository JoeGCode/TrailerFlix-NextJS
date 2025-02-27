import HomeClientComponent from "@/components/home/HomeClientComponent";
import { getMovies } from "@/lib/tmdb";

export default async function HomeServerComponent() {
  // If there is no search, render the main home page
  const [popular, topRated, upcoming] = await Promise.all([
    getMovies("popular"),
    getMovies("top_rated"),
    getMovies("upcoming"),
  ]);
  return (
    <HomeClientComponent
      popular={popular}
      topRated={topRated}
      upcoming={upcoming}
    />
  );
}

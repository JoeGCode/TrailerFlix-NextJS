import { getMovies } from "@/actions/movies/getMovies";
import HomeClientComponent from "@/components/home/HomeClientComponent";

export default async function HomeServerComponent() {
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

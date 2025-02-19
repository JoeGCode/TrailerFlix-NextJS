import HomeClientComponent from "@/components/home/HomeClientComponent";
import SearchResultsClientComponent from "@/components/search/SearchResultsClientComponent";
import { getMovies, searchMovies } from "@/lib/tmdb";

type HomeServerComponentType = {
  searchParams: Promise<{ search?: string }>;
};

export default async function HomeServerComponent(
  props: HomeServerComponentType
) {
  const searchParams = await props.searchParams;
  const searchQuery = searchParams?.search || "";

  // If there is a search, render the search results
  if (searchQuery) {
    const searchResults = await searchMovies(searchQuery);
    console.log(searchResults);
    return <SearchResultsClientComponent searchResults={searchResults} />;
  }

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

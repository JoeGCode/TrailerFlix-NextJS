import { searchMovies } from "@/actions/movies/searchMovies";
import NoSearchResults from "@/components/search/NoSearchResults";
import SearchResultsClientComponent from "@/components/search/SearchResultsClientComponent";

type SearchResultsPageType = {
  searchParams: Promise<{ q?: string }>;
};

async function Page(props: SearchResultsPageType) {
  const searchParams = await props.searchParams;
  const searchQuery = searchParams?.q || "";

  if (!searchQuery) return <NoSearchResults />;

  const searchResults = await searchMovies(searchQuery);

  if (!searchResults || !searchResults.results || !searchResults.results.length)
    return <NoSearchResults />;

  return <SearchResultsClientComponent searchResults={searchResults.results} />;
}

export default Page;

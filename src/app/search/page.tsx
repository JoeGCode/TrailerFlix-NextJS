import NoSearchResults from "@/components/search/NoSearchResults";
import SearchResultsClientComponent from "@/components/search/SearchResultsClientComponent";
import { searchMovies } from "@/lib/tmdb";
import React from "react";

type SearchResultsPageType = {
  searchParams: Promise<{ q?: string }>;
};

async function Page(props: SearchResultsPageType) {
  const searchParams = await props.searchParams;
  const searchQuery = searchParams?.q || "";

  if (!searchQuery) return <NoSearchResults />;

  const searchResults = await searchMovies(searchQuery);

  if (!searchResults || !searchResults.results.length)
    return <NoSearchResults />;

  return (
    <div className="w-full h-full">
      <SearchResultsClientComponent searchResults={searchResults} />
    </div>
  );
}

export default Page;

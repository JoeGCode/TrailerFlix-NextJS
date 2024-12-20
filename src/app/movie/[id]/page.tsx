import { getMovieDetails } from "@/lib/tmdb";
import React from "react";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const movieId = (await params).id;
  const res = await getMovieDetails(Number(movieId));
  return (
    <div>
      <div>TMDB ID of : {movieId}</div>
      <div>Title is {res.title}</div>
    </div>
  );
}

export default Page;

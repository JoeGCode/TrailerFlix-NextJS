import { getMoviesBatch } from "@/actions/movies/getMoviesBatch";
import MyListClientComponent from "@/components/user/my-list/MyListClientComponent";
import { My_List_Type } from "@/types/db";
import movieDetailsToMovie from "@/utils/movieDetailstoMovie";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

async function Page() {
  const supabase = await createClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData?.user) {
    redirect("/auth/login");
  }

  const { data: listData, error: listError } = await supabase
    .from("user-my-list")
    .select("*")
    .eq("user_id", userData.user.id);

  if (listError) {
    return <div>{listError.message}</div>;
  }

  const movieIds = listData
    ?.filter((item) => item.type === My_List_Type.MOVIE)
    .map((item) => item.item_id);

  const movieDetails = await getMoviesBatch(movieIds);
  const movies = movieDetails.map((movieDetail) =>
    movieDetailsToMovie(movieDetail),
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl">My List</h1>
      <MyListClientComponent movies={movies} />
    </div>
  );
}

export default Page;

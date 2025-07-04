import { getMoviesBatch } from "@/actions/movies/getMoviesBatch";
import MyListClientComponent from "@/components/user/my-list/MyListClientComponent";
import { My_List_Type } from "@/types/db";
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

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl">My List</h1>
      <MyListClientComponent movies={movieDetails} />
    </div>
  );
}

export default Page;

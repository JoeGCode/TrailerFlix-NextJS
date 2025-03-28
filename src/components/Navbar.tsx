import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import Menu from "./Menu";
import SearchBar from "./SearchBar";

async function Navbar() {
  const supabase = await createClient();
  const userResponse = await supabase.auth.getUser();
  const user = userResponse.data?.user;

  return (
    <nav className="my-0 flex h-20 w-full items-center justify-between px-4">
      <div className="w-1/4">
        <Menu user={user} />
      </div>
      <div className="text-center">
        <Link href="/">
          <h1 className="text-4xl font-bold">
            Trailer<span className="text-red-500">Flix</span>
          </h1>
        </Link>
      </div>
      <div className="w-1/4">
        <SearchBar />
      </div>
    </nav>
  );
}

export default Navbar;

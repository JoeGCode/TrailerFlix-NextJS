import Link from "next/link";
import SearchBar from "./SearchBar";
import { createClient } from "@/utils/supabase/server";
import NavbarDropdown from "./NavbarDropdown";

async function Navbar() {
  const supabase = await createClient();
  const userResponse = await supabase.auth.getUser();
  const user = userResponse.data?.user;

  return (
    <nav className="flex items-center h-20 px-4 w-full my-0 justify-between">
      <Link href="/">
        <h1 className="text-4xl font-bold">
          Trailer<span className="text-red-500">Flix</span>
        </h1>
      </Link>
      <div className="w-1/2">
        <SearchBar />
      </div>
      <div>
        {user ? (
          <NavbarDropdown />
        ) : (
          <Link href="/auth/login">
            <div className="w-full bg-red-600 rounded p-4 text-lg">Sign In</div>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import NavbarDropdown from "./NavbarDropdown";
import SearchBar from "./SearchBar";

async function Navbar() {
  const supabase = await createClient();
  const userResponse = await supabase.auth.getUser();
  const user = userResponse.data?.user;

  return (
    <nav className="my-0 flex h-20 w-full items-center justify-between px-4">
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
            <div className="w-full rounded bg-red-600 p-4 text-lg">Sign In</div>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

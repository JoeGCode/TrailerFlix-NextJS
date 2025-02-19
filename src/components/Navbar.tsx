import Link from "next/link";
import SearchBar from "./SearchBar";

const Navbar = () => {
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
    </nav>
  );
};

export default Navbar;

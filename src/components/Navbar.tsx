import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center h-20 px-4 w-full my-0">
      <Link href="/">
        <h1 className="text-4xl font-bold">
          Trailer<span className="text-red-500">Flix</span>
        </h1>
      </Link>
    </nav>
  );
};

export default Navbar;

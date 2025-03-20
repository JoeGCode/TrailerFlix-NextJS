"use client";
import { debouncedCallback } from "@/utils/debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SearchBar() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace, push } = useRouter();

  const handleSearch = debouncedCallback(function (term: string) {
    const params = new URLSearchParams(searchParams);
    term = term.trim();
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    if (pathName === "/search") {
      replace(`${pathName}?${params.toString()}`);
    } else {
      push(`/search?${params.toString()}`);
    }
  }, 300);

  return (
    <div>
      <input
        className="p-2 rounded-sm text-black w-full"
        type="text"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("q") || ""}
      />
    </div>
  );
}

export default SearchBar;

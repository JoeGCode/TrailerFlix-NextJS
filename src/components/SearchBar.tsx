"use client";
import { debouncedCallback } from "@/utils/debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

function SearchBar() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = debouncedCallback(function (term: string) {
    const params = new URLSearchParams(searchParams);
    term = term.trim();
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathName}?${params.toString()}`);
  }, 300);

  return (
    <div>
      <input
        className="p-2 rounded-sm text-black w-full"
        type="text"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("search")?.toString() || ""}
      />
    </div>
  );
}

export default SearchBar;

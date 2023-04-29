"use client";
import { HiSearch } from "react-icons/hi";
function SearchBox() {
  return (
    <form className="mt-3 flex items-center rounded-3xl border-2 px-5">
      <HiSearch size={24} className="text-gray-500" />
      <input
        type="text"
        placeholder="Search..."
        className="h-14 w-full flex-1 rounded-sm p-3 text-gray-500 placeholder-gray-400 outline-none"
      />
      <button type="submit" className="hidden">
        Search
      </button>
    </form>
  );
}

export default SearchBox;

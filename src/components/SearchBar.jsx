import { useContext } from "react";
import { MyStore } from "../context/MyStore";

export default function SearchBar() {
  const {search,setSearch} = useContext(MyStore)
  return (
    <div className="ml-auto flex h-10.75 w-full max-w-115 items-center rounded-[3px] border border-[#ded9cf] bg-white max-md:order-3 max-md:max-w-none max-md:basis-full max-md:ml-0">
      <input onChange ={(e)=>setSearch(e.target.value)}
        type="text"
        value={search}
        placeholder="Search for anything"
        aria-label="Search products"
        className="h-full w-full bg-transparent px-3.5 text-sm outline-none placeholder:text-gray-400"
      />

      <button
        aria-label="Search"
        className="px-3.5 text-[25px] text-[#1e1d1a] transition-colors hover:text-[#ed6b3b]"
      >
        ⌕
      </button>
    </div>
  );
}
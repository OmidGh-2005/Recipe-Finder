import { useState } from "react";
import SearchBtn from "../SearchBtn";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: trigger recipe search with `input`
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl flex items-center gap-3">
      <input
        type="text"
        placeholder="Search for ingredients or food name..."
        className="flex-1 px-8 py-3 rounded-full border border-[#F0E4D4] bg-white text-[#3D3D3D] placeholder-[#A8A29E] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all duration-200"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <SearchBtn>Search</SearchBtn>
    </form>
  );
};

export default SearchBar;
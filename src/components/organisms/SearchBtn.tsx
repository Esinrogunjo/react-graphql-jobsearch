import React, { useState } from "react";
import SearchIcon from "../atoms/vectors/SearchIcon";

const SearchBtn = ({
  setSearching,
}: {
  setSearching: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      setSearching(search);
      e.target.value = "";
      setSearch("");
    }
  };
  return (
    <div className="flex  w-full h-inputHeight  bg-[#F5F5F5] px-2 items-center">
      <input
        name="search"
        placeholder=" Type press the Enter key to search "
        className="flex-grow"
        type={"text"}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => handleSearch(e)}
        value={search}
      />
      <SearchIcon
        width={"1.553125rem"}
        height={"1.62125rem"}
        className="cursor-pointer"
      />
    </div>
  );
};

export default SearchBtn;

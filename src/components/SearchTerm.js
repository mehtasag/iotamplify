import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchTerm } from "../app/slice/postSlice";
const SearchTerm = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    dispatch(getSearchTerm(query));
    console.log(query);
  };

  return (
    <form className="flex w-full mt-5  md:w-1/2 mx-auto items-center relative dark:bg-gray-700">
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          id="voice-search"
          className="text-gray-900 text-sm  block w-full pl-10 p-2.5 focus:outline-none dark:bg-gray-700   dark:placeholder-gray-400 dark:text-white"
          placeholder="Search blog by catergory, author, technology..."
        />
      </div>
      <span
        onClick={() => setQuery("")}
        className="bg-rose-700 cursor-pointer w-20 text-white h-full p-2 text-center font-bold"
      >
        Clear
      </span>
    </form>
  );
};

export default SearchTerm;

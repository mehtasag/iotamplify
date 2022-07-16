import { XCircleIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchTerm } from "../app/slice/postSlice";
import { SearchIcon } from "@heroicons/react/outline";
import CommonModal from "./helper/CommonModal";
const SearchTerm = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const [showHistory, setShowhistory] = useState(false);
  
  const handleSearch = (e) => {
    setQuery(e.target.value);
    dispatch(getSearchTerm(query));
    console.log(query);
  };

  return (
    <CommonModal
      onClose={() => setShowhistory(false)}
      styleClass="grid relative min-h[10vh] max-h-[40vh]"
    >
      <div
        onClick={() => setShowhistory(true)}
        className="flex h-fit   items-center relative dark:bg-gray-700 z-[1]"
      >
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
      </div>
      {showHistory && (
        <div className="relative border border-gray-600 bg-black scale-in-ver-top">
          <div className="bg-black">
            <button className="absolute right-0 pt-1  pr-2 text-blue-400 font-bold fontFamily text-[0.9rem]">
              Clear All
            </button>
            <h3 className="text-white ml-1  text-2xl font-semibold fontFamily">
              Previous Search...
            </h3>
          </div>
          <div className=" bg-black min-h-[10vh] max-h-[30vh] pb-8   overflow-scroll overflow-y-scroll">
            <div className="flex mt-2 justify-between cursor-pointer hover:bg-gray-800 p-3">
              <SearchIcon className="w-8 h-8 text-white" />
              <h3 className="text-white">History</h3>
              <XCircleIcon className="w-6 h-6 text-rose-400" />
            </div>
            <div className="flex justify-between cursor-pointer hover:bg-gray-800  p-3">
              <SearchIcon className="w-8 h-8 text-white" />

              <h3 className="text-white">History</h3>
              <XCircleIcon className="w-6 h-6 text-rose-400" />
            </div>
            <div className="flex justify-between cursor-pointer hover:bg-gray-800  p-3">
              <SearchIcon className="w-8 h-8 text-white" />

              <h3 className="text-white">History</h3>
              <XCircleIcon className="w-6 h-6 text-rose-400" />
            </div>
            <div className="flex justify-between cursor-pointer hover:bg-gray-800  p-3">
              <SearchIcon className="w-8 h-8 text-white" />

              <h3 className="text-white">History</h3>
              <XCircleIcon className="w-6 h-6 text-rose-400" />
            </div>
            <div className="flex justify-between cursor-pointer hover:bg-gray-800  p-3">
              <SearchIcon className="w-8 h-8 text-white" />

              <h3 className="text-white">History</h3>
              <XCircleIcon className="w-6 h-6 text-rose-400" />
            </div>
            <div className="flex justify-between cursor-pointer hover:bg-gray-800  p-3">
              <SearchIcon className="w-8 h-8 text-white" />

              <h3 className="text-white">History</h3>
              <XCircleIcon className="w-6 h-6 text-rose-400" />
            </div>
            <div className="flex justify-between cursor-pointer hover:bg-gray-800  p-3">
              <SearchIcon className="w-8 h-8 text-white" />

              <h3 className="text-white">History</h3>
              <XCircleIcon className="w-6 h-6 text-rose-400" />
            </div>
          </div>
          <div className="absolute bottom-0 bg-indigo-800  w-full mx-auto  items-center flex  cursor-pointer  p-2">
            <h3 className="text-white">Showing </h3>
          </div>
        </div>
      )}
    </CommonModal>
  );
};

export default SearchTerm;

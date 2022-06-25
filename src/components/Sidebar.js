import React, { useState } from "react";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import { XCircleIcon } from "@heroicons/react/solid";
import NavbarLinks from "./NavbarLinks";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="z-1000">
      {isOpen === false ? (
        <MenuAlt3Icon
          onClick={() => setIsOpen(true)}
          className="absolute right-3 border-3  top-2 w-10 h-10 text-cyan-200 cursor-pointer"
        />
      ) : (
        <XCircleIcon
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 w-8 h-8 text-cyan-200 cursor-pointer z-18"
        />
      )}
      <div
        className={`transition flex flex-col justify-center text-center gap-5 top-0 right-0 w-[25vw] fixed  bg-yellow-900 h-full z-1000  ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="text-2xl text-white text-bold m-auto grid gap-20">
          <div className="hover:bg-red-400 text-bold">
            <NavbarLinks to="/addPost" value="Add Post" />
          </div>
          <div className="hover:bg-red-400 text-bold">
            <NavbarLinks to="/about" value="Read Me" />
          </div>
          <div className="hover:bg-red-400 text-bold">
            <h2 className="text-2xl text-white cursor-pointer hover:bg-red-400 p-2">
              Sign Out
            </h2>
          </div>
        </div>

        <XCircleIcon
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 w-8 h-8 text-cyan-200 cursor-pointer z-100"
        />
      </div>
    </div>
  );
};

export default Sidebar;

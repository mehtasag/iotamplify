import React, { useState } from "react";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import { XCircleIcon } from "@heroicons/react/solid";
import NavbarLinks from "./NavbarLinks";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useSelector } from "react-redux";
import { selectUser } from "../app/slice/userSlice";
const Sidebar = () => {
  const navigate = useNavigate();
  const cuser = useSelector(selectUser);
  const [isOpen, setIsOpen] = useState(false);
  const signout = async () => {
    try {
      await Auth.signOut();
      navigate("/logout");
      setIsOpen(false);
    } catch (err) {
      console.log("Sign out", err);
    }
  };
  return (
    <div className="z-1000">
      {isOpen === false ? (
        <MenuAlt3Icon
          onClick={() => setIsOpen(true)}
          className="absolute right-3 border-3  top-2 w-6 h-6 md:w-8 md:h-8 text-cyan-200 cursor-pointer"
        />
      ) : (
        <XCircleIcon
          onClick={() => setIsOpen(false)}
          className="absolute right-2 w-4 h-4 md:w-8 md:h-8 top-2  text-cyan-200 cursor-pointer z-18"
        />
      )}
      <div
        className={`transition flex float-left  gap-5 top-0 right-0 w-[70%] md:w-[25vw] fixed  bg-stone-900 h-full  ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="text-1xl fontFamily text-white text-bold m-auto grid gap-20">
          <div
            onClick={() => setIsOpen(false)}
            className="hover:bg-red-400 text-bold rounded-2xl p-2"
          >
            <NavbarLinks to="/addPost" value="Add Post" />
          </div>
          <div
            onClick={() => setIsOpen(false)}
            className="hover:bg-red-400 text-extrabold rounded-2xl p-2"
          >
            <NavbarLinks to="/about" value="Read Me" />
          </div>
          {cuser ? (
            <>
              <Link to={`/users/${cuser.uid}`}>
                <h2
                  onClick={() => setIsOpen(false)}
                  className="text-1xl bg-gray-400 text-center text-white cursor-pointer hover:bg-red-400  rounded-2xl p-2"
                >
                  Profile
                </h2>
              </Link>

              <div className="hover:bg-red-400 text-bold">
                <h2
                  onClick={signout}
                  className="text-1xl bg-rose-400 text-center text-white cursor-pointer hover:bg-red-400  rounded-2xl p-2"
                >
                  Sign Out
                </h2>
              </div>
            </>
          ) : (
            <Link to="/login">
              <h3
                onClick={() => setIsOpen(false)}
                className="bg-green-400 text-center text-white text-bold fontFamily rounded p-2"
              >
                Sign In
              </h3>
            </Link>
          )}
        </div>

        <XCircleIcon
          onClick={() => setIsOpen(false)}
          className="absolute right-0 md:right-2 w-6 h-6 md:w-8 md:h-8 top-2  text-cyan-200 cursor-pointer z-100"
        />
      </div>
    </div>
  );
};

export default Sidebar;

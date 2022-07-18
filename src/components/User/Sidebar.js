import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  HashtagIcon,
  PlusCircleIcon,
  ThumbUpIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";
import {
  LogoutIcon,
  ChatAltIcon,
  BellIcon,
  UserIcon,
  LoginIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { logout, selectUser } from "../../app/slice/userSlice";
import { useDispatch } from "react-redux";
import { Auth } from "aws-amplify";

const LinkClass =
  "flex cursor-pointer transition ease-in-out hover:bg-gray-700  text-center justify-center";
const Sidebar = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signout = async () => {
    try {
      await Auth.signOut();
      navigate("/logout");
      dispatch(
        logout({
          user: null,
        })
      );
    } catch (err) {
      console.log("Sign out", err);
    }
  };
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="grid  md:w-auto bg-black md:fixed border-r border-gray-600   left-8 2xl:left-0 2xl:flex-[0.3] md:pr-3 h-screen md:border-r md:border-gray-400  2xl:bg-black text-center justify-center items-center z-[10000]">
      <Link to="/">
        <div className={LinkClass}>
          <HomeIcon className="w-5 h-5 ml-3 md:ml-0 md:w-7 md:h-7 2xl:flex-[0.3] text-white  mr-3" />
          <h3 className="fontFamily flex-1  font-bold text-[1rem] hidden 2xl:block lg:pr-2 text-white">
            Home
          </h3>
        </div>
      </Link>
      <Link to={`/users/${user?.profileData?.username}`}>
        <div className={LinkClass}>
          <UserIcon className="w-5 h-5 ml-3 md:ml-0 md:w-7 md:h-7 2xl:flex-[0.3] text-white  mr-3" />
          <h3 className="fontFamily flex-1 font-bold text-[1rem] hidden 2xl:block lg:pr-2 text-white">
            Profile
          </h3>
        </div>
      </Link>
      <Link to="/explore">
        <div className={LinkClass}>
          <HashtagIcon className="w-5 h-5 ml-3 md:ml-0 md:w-7 md:h-7 text-center 2xl:flex-[0.3] text-white  mr-3" />
          <h3 className="fontFamily flex-1 font-bold text-[1rem] hidden 2xl:block lg:pr-2 text-white">
            Explore
          </h3>
        </div>
      </Link>

      <div className={LinkClass}>
        <ThumbUpIcon className="w-5 h-5 ml-3 md:ml-0 md:w-7 md:h-7 2xl:flex-[0.3] text-white  mr-3" />
        <h3 className="fontFamily flex-1 font-bold text-[1rem] hidden 2xl:block lg:pr-2 text-white">
          Your Likes
        </h3>
      </div>

      {showMore ? (
        <>
          <div className={LinkClass}>
            <ChatAltIcon className="w-5 h-5 ml-3 md:ml-0 md:w-7 md:h-7 2xl:flex-[0.3] text-white  mr-3" />
            <h3 className="fontFamily flex-1 font-bold text-[1rem] hidden 2xl:block lg:pr-2 text-white">
              Messages
            </h3>
          </div>
          <Link to="/addPost">
            <div className={LinkClass}>
              <PlusCircleIcon className="w-5 h-5 ml-3 md:ml-0 md:w-7 md:h-7 2xl:flex-[0.3] text-white  mr-3" />
              <h3 className="fontFamily flex-1 font-bold text-[1rem] hidden 2xl:block lg:pr-2 text-white">
                Create Post
              </h3>
            </div>
          </Link>
          <div className="flex  2xl:p-0 cursor-pointer hover:bg-gray-700 hover:rounded-full   text-center justify-center">
            <BellIcon className="w-5 h-5 ml-3 md:ml-0 md:w-7 md:h-7 2xl:flex-[0.3] text-white  mr-3" />
            <h3 className="fontFamily flex-1  font-bold text-[1rem] hidden 2xl:block lg:pr-2 text-white">
              Notifications
            </h3>
          </div>
        </>
      ) : (
        <div onClick={() => setShowMore(true)} className={LinkClass}>
          <DotsHorizontalIcon className="w-9 h-7 2xl:flex-[0.3] text-white 2xl:mr-5" />
          <h3 className="fontFamily flex-1 font-bold text-[1rem] hidden 2xl:block lg:pr-2 text-white ">
            Show More
          </h3>
        </div>
      )}
      {user ? (
        <div
          onClick={signout}
          className="flex  cursor-pointer hover:bg-gray-700 hover:p-1 hover:rounded-2xl text-center justify-center  2xl:bg-rose-400 items-center"
        >
          <LogoutIcon className="w-7 h-7 text-red-500 2xl:text-white" />
          <h3 className="fontFamily font-bold text-[1rem] hidden 2xl:block lg:pr-2 text-white p-2">
            Sign out
          </h3>
        </div>
      ) : (
        <Link to="/login">
          <div className="flex  cursor-pointer hover:bg-gray-700 hover:p-1 hover:rounded-2xl text-center justify-center  2xl:bg-rose-400 items-center">
            <LoginIcon className="w-7 h-7 md:text-green-500 2xl:text-white" />
            <h3 className="fontFamily font-bold text-[1rem] hidden 2xl:block lg:pr-2 text-white p-2">
              Login
            </h3>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;

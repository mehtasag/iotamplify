import React, { useState } from "react";
import { Link } from "react-router-dom";
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
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/slice/userSlice";

const LinkClass =
  "flex cursor-pointer transition ease-in-out hover:bg-gray-700  text-center justify-center";
const Sidebar = () => {
  const user = useSelector(selectUser);
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="md:grid hidden fixed  left-8 2xl:left-0 2xl:flex-[0.3] md:pr-3 h-screen md:border-r md:border-gray-400  2xl:bg-black text-center justify-center items-center">
      <Link to="/">
        <div className={LinkClass}>
          <HomeIcon className="w-7 h-7 2xl:flex-[0.3] text-white  mr-3" />
          <h3 className="fontFamily flex-1  font-bold text-[1rem] md:hidden 2xl:block lg:pr-2 text-white">
            Home
          </h3>
        </div>
      </Link>
      <Link to={`/users/${user?.uid}`}>
        <div className={LinkClass}>
          <UserIcon className="w-7 h-7 2xl:flex-[0.3] text-white  mr-3" />
          <h3 className="fontFamily flex-1 font-bold text-[1rem] md:hidden 2xl:block lg:pr-2 text-white">
            Profile
          </h3>
        </div>
      </Link>
      <Link to="/explore">
        <div className={LinkClass}>
          <HashtagIcon className="w-7 h-7 text-center 2xl:flex-[0.3] text-white  mr-3" />
          <h3 className="fontFamily flex-1 font-bold text-[1rem] md:hidden 2xl:block lg:pr-2 text-white">
            Explore
          </h3>
        </div>
      </Link>

      <div className={LinkClass}>
        <ThumbUpIcon className="w-7 h-7 2xl:flex-[0.3] text-white  mr-3" />
        <h3 className="fontFamily flex-1 font-bold text-[1rem] md:hidden 2xl:block lg:pr-2 text-white">
          Your Likes
        </h3>
      </div>

      {showMore ? (
        <>
          <div className={LinkClass}>
            <ChatAltIcon className="w-7 h-7 2xl:flex-[0.3] text-white  mr-3" />
            <h3 className="fontFamily flex-1 font-bold text-[1rem] md:hidden 2xl:block lg:pr-2 text-white">
              Messages
            </h3>
          </div>
          <Link to="/addPost">
            <div className={LinkClass}>
              <PlusCircleIcon className="w-7 h-7 2xl:flex-[0.3] text-white  mr-3" />
              <h3 className="fontFamily flex-1 font-bold text-[1rem] md:hidden 2xl:block lg:pr-2 text-white">
                Create Post
              </h3>
            </div>
          </Link>
          <div className="flex  cursor-pointer hover:bg-gray-700 hover:p-1 hover:rounded-2xl text-center justify-center">
            <BellIcon className="w-7 h-7 2xl:flex-[0.3] text-white  mr-3" />
            <h3 className="fontFamily flex-1  font-bold text-[1rem] md:hidden 2xl:block lg:pr-2 text-white">
              Notifications
            </h3>
          </div>
        </>
      ) : (
        <div onClick={() => setShowMore(true)} className={LinkClass}>
          <DotsHorizontalIcon className="w-9 h-7 2xl:flex-[0.3] text-white 2xl:mr-5" />
          <h3 className="fontFamily flex-1 font-bold text-[1rem] md:hidden 2xl:block lg:pr-2 text-white ">
            Show More
          </h3>
        </div>
      )}

      <div className="flex  cursor-pointer hover:bg-gray-700 hover:p-1 hover:rounded-2xl text-center justify-center  2xl:bg-rose-400 items-center">
        <LogoutIcon className="w-7 h-7 md:text-red-500 2xl:text-white" />
        <h3 className="fontFamily font-bold text-[1rem] md:hidden 2xl:block lg:pr-2 text-white p-2">
          Sign out
        </h3>
      </div>
    </div>
  );
};

export default Sidebar;

import { useEffect, useState } from "react";
import {
  HomeIcon,
  BookOpenIcon,
  HashtagIcon,
  UserIcon,
  PlusCircleIcon,
  ThumbUpIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import {
  LogoutIcon,
  ChatAltIcon,
  BellIcon,
  LinkIcon,
} from "@heroicons/react/outline";

import { HeartIcon } from "@heroicons/react/solid";
import * as queries from "../graphql/queries";
import { API } from "aws-amplify";
import CommonModal from "./helper/CommonModal";
import EditProfile from "./EditProfile";

const LinkClass =
  "flex cursor-pointer transition ease-in-out hover:bg-gray-700 hover:p-1 hover:rounded-2xl text-center justify-center";
const Profile = ({ cuser }) => {
  const [explore, setExplore] = useState(false);
  const [user, setUser] = useState([]);
  const [editProfile, setEditProfile] = useState(false);
  console.log(cuser);
  useEffect(() => {
    let isMounted = true;
    const getUser1 = async () => {
      const postData = await API.graphql({
        query: queries.getUser,

        variables: { id: cuser?.attributes?.sub },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      setUser(postData.data.getUser);
    };
    if (isMounted) {
      getUser1();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  console.log(user);
  return (
    <div className="relative">
      <div
        className={`flex ${
          editProfile ? "opacity-5" : ""
        } bg-black w-full min-h-screen max-h-fit`}
      >
        <div className="grid fixed md:flex-[0.1] left-8 2xl:left-0 2xl:flex-[0.3] md:pr-3 h-screen md:border-r md:border-gray-400  2xl:bg-black text-center justify-center items-center">
          <div onClick={() => setExplore(false)} className={LinkClass}>
            <HomeIcon className="w-7 h-7 2xl:flex-[0.3] text-white  mr-3" />
            <h3 className="fontFamily flex-1  font-bold text-[1rem] md:hidden 2xl:block lg:pr-2 text-white">
              Home
            </h3>
          </div>
          <div className={LinkClass}>
            <ThumbUpIcon className="w-7 h-7 2xl:flex-[0.3] text-white  mr-3" />
            <h3 className="fontFamily flex-1 font-bold text-[1rem] md:hidden 2xl:block lg:pr-2 text-white">
              Your Likes
            </h3>
          </div>
          <div onClick={() => setExplore(true)} className={LinkClass}>
            <HashtagIcon className="w-7 h-7 text-center 2xl:flex-[0.3] text-white  mr-3" />
            <h3 className="fontFamily flex-1 font-bold text-[1rem] md:hidden 2xl:block lg:pr-2 text-white">
              Explore
            </h3>
          </div>
          <div className={LinkClass}>
            <ChatAltIcon className="w-7 h-7 2xl:flex-[0.3] text-white  mr-3" />
            <h3 className="fontFamily flex-1 font-bold text-[1rem] md:hidden 2xl:block lg:pr-2 text-white">
              Messages
            </h3>
          </div>
          <div className={LinkClass}>
            <PlusCircleIcon className="w-7 h-7 2xl:flex-[0.3] text-white  mr-3" />
            <h3 className="fontFamily flex-1 font-bold text-[1rem] md:hidden 2xl:block lg:pr-2 text-white">
              Create Post
            </h3>
          </div>
          <div className="flex  cursor-pointer hover:bg-gray-700 hover:p-1 hover:rounded-2xl text-center justify-center">
            <BellIcon className="w-7 h-7 2xl:flex-[0.3] text-white  mr-3" />
            <h3 className="fontFamily flex-1  font-bold text-[1rem] md:hidden 2xl:block lg:pr-2 text-white">
              Notifications
            </h3>
          </div>

          <div className="flex  cursor-pointer hover:bg-gray-700 hover:p-1 hover:rounded-2xl text-center justify-center  2xl:bg-rose-400 items-center">
            <LogoutIcon className="w-7 h-7 text-white" />
            <h3 className="fontFamily font-bold text-[1rem] md:hidden 2xl:block lg:pr-2 text-white p-2">
              Sign out
            </h3>
          </div>
        </div>
        {/* Right Side with Two Cols */}

        <div className="md:flex-[0.6] 2xl:flex-[0.5] relative border bg-slate-900 mb-5 text-white md:ml-[10vw] 2xl:ml-[12vw] mt-5">
          {explore ? (
            <h3>Explore</h3>
          ) : (
            <div>
              <div className="flex relative items-center   bg-black p-3">
                <div className="bg-gray-300 grid place-items-center text-center rounded-full md:w-[50px] md:h-[50px] 2xl:w-[60px] 2xl:h-[60px]">
                  {user?.image ? (
                    <img
                      className="w-fit h-fit rounded-full object-contain"
                      src={`https://iotamplify2022235759-dev.s3.amazonaws.com/public/${user?.image?.key}`}
                    />
                  ) : (
                    <UserIcon className="w-15 h-10 text-white" />
                  )}
                </div>
                <div>
                  <h3 className="text-white ml-7 md:text-[1.2rem] 2xl:text-[1.4rem] font-semibold font-sans">
                    {user?.name}
                  </h3>
                  <h3 className="text-cyan-300 ml-7 md:text-[0.9rem]  font-semibold font-sans">
                    {user?.username}
                  </h3>
                </div>

                {cuser?.attributes?.email_verified ? (
                  <div className="ml-[20%]">
                    <div className="w-[50px] h-[20px] bg-green-400"></div>
                    <span className="text-[1rem] font-semibold fontFamily">
                      Status
                    </span>
                  </div>
                ) : (
                  <div className="ml-[30%]">
                    <div className="w-[50px] h-[20px] bg-rose-400"></div>
                    <span className="text-[1rem] font-semibold fontFamily">
                      Status
                    </span>
                  </div>
                )}
                <button
                  onClick={() => setEditProfile(true)}
                  className="absolute right-10 p-2 md:text-[0.8rem]  border-2 rounded-2xl hover:bg-gray-800"
                >
                  Edit Profile
                </button>
              </div>

              <div className="flex justify-between">
                <div className="p-3">
                  <p className="fontFamily text-gray-400 font-bold text-[0.8rem]">
                    Introduction
                  </p>
                  <span className="text-slate-400 mt-2 text-[0.9rem]">
                    {user?.about}
                  </span>
                </div>
                <div className="p-3 mr-5">
                  <p className="fontFamily flex text-gray-400 font-bold text-[0.8rem]">
                    <LocationMarkerIcon className="w-6 h-6 text-green-400 -mt-1   mr-1" />
                    {user?.country}
                  </p>
                </div>
              </div>
              <div className="p-3">
                <p className="fontFamily flex text-gray-400 font-bold text-[0.8rem]">
                  Website
                  <LinkIcon className="w-4 h-4 ml-1 text-cyan-300" />
                </p>
                <span className="text-blue-400 cursor-pointer mt-2 text-[0.9rem]">
                  <a href={user?.website}>{user?.website}</a>
                </span>
              </div>

              <div className="p-3">
                <p className="fontFamily flex text-gray-400 mb-4 font-bold text-[0.8rem]">
                  Interests / Preference
                  <HeartIcon className="w-6 h-6 -mt-1 ml-1 text-rose-400" />
                </p>
                <div className="flex flex-wrap w-[90%] gap-2  grid-cols-3  grid-flow-col">
                  {user?.preference?.map((data) => (
                    <span
                      key={data.id}
                      className="text-blue-400 cursor-pointer text-[1rem] p-2 border border-red-200"
                    >
                      #{data.name}
                    </span>
                  ))}
                  {user?.preference?.map((data) => (
                    <span
                      key={data.id}
                      className="text-blue-400 cursor-pointer text-[1rem] p-2 border border-red-200"
                    >
                      #{data.name}
                    </span>
                  ))}
                  {user?.preference?.map((data) => (
                    <span
                      key={data.id}
                      className="text-blue-400 cursor-pointer text-[1rem] p-2 border border-red-200"
                    >
                      #{data.name}
                    </span>
                  ))}
                </div>

                {/* Posts and Likes  OR ACTIVITIES to be precise */}

                <div className="flex mt-3 p-2 md:h-[35vh] 2xl:h-[50vh]">
                  <div className="bg-red-400 flex-[0.5]">Recent Posts</div>
                  <div className="bg-green-400 flex-[0.5]">Recent Likes</div>
                </div>
              </div>

              <div className="absolute bottom-[2vh] left-[44%]">
                <button className="bg-rose-600 p-2 rounded-2xl font-semibold text-[1rem]">
                  Delete Account
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="md:flex-[0.40] mt-10 ">
          <h3 className="text-white ">Right 3</h3>
          Right 3
        </div>
      </div>
      {editProfile && (
        <CommonModal
          styleClass="fixed w-[60vw]  md:h-[80vh]  2xl:h-[65vh] top-[4vw] left-[20vw] bg-slate-900 scale-up-ver-bottom"
          onClose={() => setEditProfile(false)}
        >
          <EditProfile user={user} />
        </CommonModal>
      )}
    </div>
  );
};

export default Profile;

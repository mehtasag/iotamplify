import { useEffect, useState } from "react";
import {
  UserIcon,
  LocationMarkerIcon,
  DotsHorizontalIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";
import { TrashIcon, LinkIcon, PencilIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/solid";
import CommonModal from "./helper/CommonModal";
import EditProfile from "./EditProfile";
import moment from "moment";
import DeletePost from "./User/DeletePost";
import Sidebar from "./User/Sidebar";
import { useSelector } from "react-redux";
import { selectUser } from "../app/slice/userSlice";

const Profile = () => {
  const [explore, setExplore] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [postActionModal, setPostActionModal] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState("");
  const [selectedPost, setSelectedPost] = useState([]);

  const [deletePostModal, setDeletePostModal] = useState(false);

  const user2 = useSelector(selectUser);

  const user = user2.profileData;
  return (
    <div className="relative">
      <div
        className={`grid md:flex ${
          editProfile ? "opacity-5" : ""
        } bg-black w-full min-h-screen max-h-fit`}
      >
        {/* Left Sidebar */}
        <Sidebar setExplore={setExplore} />
        {/* Right Side with Two Cols */}

        <div className="md:flex-[0.6] 2xl:flex-[0.5] relative md:border bg-slate-900 mb-5 text-white md:ml-[4vw] 2xl:ml-[7vw] md:mt-5">
          <div>
            <div className="flex relative items-center   bg-black p-3">
              <div className="bg-gray-300 grid place-items-center text-center rounded-full w-[35px] h-[35px] md:w-[50px] md:h-[50px] 2xl:w-[60px] 2xl:h-[60px]">
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
                <h3 className="text-white ml-2  md:ml-7 text-[0.8rem] md:text-[1.2rem] 2xl:text-[1.4rem] font-semibold font-sans">
                  {user?.name}
                </h3>
                <h3 className="text-cyan-300 ml-2 md:ml-7 md:text-[0.9rem]  font-semibold font-sans">
                  {user?.username}
                </h3>
              </div>

              {user?.attributes?.email_verified ? (
                <div className="ml-[5%] md:ml-[20%]">
                  <div className=" rounded-full ml-[15%] md:ml-0 w-[15px] h-[15px] md:w-[40px] md:h-[15px] bg-green-400"></div>
                  <span className="text-[0.8rem] font-semibold fontFamily">
                    Status
                  </span>
                </div>
              ) : (
                <div className="ml-[5%] md:ml-[30%]">
                  <div className="w-[50px] h-[20px] bg-rose-400"></div>
                  <span className="text-[0.8rem] md:text-[1rem] font-semibold fontFamily">
                    Status
                  </span>
                </div>
              )}
              <button
                onClick={() => setEditProfile(true)}
                className="absolute right-2 p-2 text-[0.8rem] md:right-10 md:p-2   border-2 rounded-2xl hover:bg-gray-800"
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
                {user?.preference !== null ? (
                  user?.preference?.map((data) => (
                    <span
                      key={data.id}
                      className="text-blue-400 cursor-pointer text-[0.9rem] rounded p-1 border border-red-200"
                    >
                      #{data.name}
                    </span>
                  ))
                ) : (
                  <button
                    onClick={() => setEditProfile(true)}
                    className=" p-2 md:text-[0.8rem]  border-2 rounded-2xl hover:bg-gray-800"
                  >
                    No Preference yet !! Add Now
                  </button>
                )}
              </div>

              {/* Posts and Likes  OR ACTIVITIES to be precise */}

              <div className=" mt-3">
                <h3 className="mb-2 text-bold fontFamily text-[0.9rem] text-gray-400">
                  Recent Posts
                </h3>
                <div className="bg-black">
                  <div className="">
                    {user?.posts?.items?.map((postData) => (
                      <div
                        key={postData.id}
                        className="flex relative justify-between border border-gray-600 mt-1  p-3 w-full"
                      >
                        {postActionModal && selectedPostId === postData?.id && (
                          <CommonModal
                            onClose={() => setPostActionModal(false)}
                            styleClass="absolute grid right-4  top-9 w-[40%] h-[15vh] shadow transition bg-gray-200  z-[10]"
                          >
                            <div className="flex items-center cursor-pointer hover:bg-gray-400">
                              <PencilIcon className="w-6 h-6 ml-2 mr-2 text-slate-900" />
                              <span className="text-[0.9rem] font-semibold text-slate-900 fontFamily">
                                Edit Post
                              </span>
                            </div>
                            <div
                              onClick={() => {
                                setDeletePostModal(true);
                                setPostActionModal(false);
                                setSelectedPost(postData);
                              }}
                              className="flex items-center cursor-pointer hover:bg-gray-400"
                            >
                              <TrashIcon className="w-6 h-6 ml-2 mr-2 text-slate-900" />

                              <span className="text-[0.9rem] font-semibold text-slate-900 fontFamily">
                                Delete Post
                              </span>
                            </div>
                          </CommonModal>
                        )}
                        <Link to={`/${postData.id}`}>
                          <div className="grid grid-flow-col gap-3 mb-2 items-center">
                            {user?.image ? (
                              <img
                                className="w-[3rem] h-[3rem] rounded-full object-cover  border-2 border-green-400"
                                src={`https://iotamplify2022235759-dev.s3.amazonaws.com/public/${user?.image?.key}`}
                              />
                            ) : (
                              <UserIcon className="w-10 h-10 text-white" />
                            )}
                            <h3>{postData.title.slice(0, 60)}...</h3>
                          </div>
                        </Link>
                        <div className="grid relative">
                          <div
                            onClick={() => {
                              setPostActionModal(true);
                              setSelectedPostId(postData?.id);
                              setSelectedPost(postData);
                            }}
                            className="bg-gray-500 absolute -right-1 hover:scale-125 transition  -top-1 w-6 h-6 rounded-full grid place-items-center"
                          >
                            <DotsHorizontalIcon className="cursor-pointer right-0 w-5 h-5 text-slate-200 -top-2" />
                          </div>
                          <span className="text-gray-600 mt-7  font-semibold fontFamily text-[0.8rem]">
                            {moment(new Date(postData?.createdAt)).fromNow()}
                          </span>
                          {/* Show Modal To Let User Make Changes */}
                        </div>
                      </div>
                    ))}
                    {deletePostModal && (
                      <CommonModal onClose={() => {}}>
                        <DeletePost
                          selectedPost={selectedPost}
                          setDeletePostModal={setDeletePostModal}
                        />
                      </CommonModal>
                    )}
                  </div>
                </div>
                <button className="flex gap-3  bg-cyan-300 md:bg-transparent  font-bold  md:border  md:border-cyan-300 rounded-2xl p-2 mt-2 text-center items-center justify-center">
                  <span className="text-slate-900 md:text-gray-300 fontFamily text-[0.8rem]">
                    View All Posts
                  </span>
                  <ArrowNarrowRightIcon className="w-4 h-4 2xl:2-6 2xl:h-6 text-slate-900 md:text-white" />
                </button>
              </div>
            </div>

            <div className="hidden md:block bottom-3 md:absolute  md:bottom-[2vh] left-[30%] md:left-[44%]">
              <button className="bg-rose-600 p-2 rounded-2xl font-semibold text-[1rem]">
                Delete Account
              </button>
            </div>
          </div>
        </div>
        <div className="grid md:flex-[0.35] 2xl:flex-[0.32] mt-0 md:mt-8 md:ml-10 2xl:ml-20">
          <div className="bg-red-400 h-[40vh]">
            <h2 className="text-2xl font-bold  text-center fontFamily text-gray-300">
              People Like You
            </h2>
            <h3 className="text-white ">Right 3</h3>
            <h3 className="text-white ">Right 3</h3>
            <h3 className="text-white ">Right 3</h3>
            <h3 className="text-white ">Right 3</h3>
            <h3 className="text-white ">Right 3</h3>
            <h3 className="text-white ">Right 3</h3>
            <h3 className="text-white ">Right 3</h3>
            <h3 className="text-white ">Right 3</h3>
            <h3 className="text-white ">Right 3</h3>
          </div>
          <div className="bg-red-400 h-[40vh]">
            <h2 className="text-2xl font-bold text-center fontFamily text-gray-300">
              People Like You
            </h2>
            <h3 className="text-white ">Right 3</h3>
            <h3 className="text-white ">Right 3</h3>
            <h3 className="text-white ">Right 3</h3>
            <h3 className="text-white ">Right 3</h3>
            <h3 className="text-white ">Right 3</h3>
            <h3 className="text-white ">Right 3</h3>
            <h3 className="text-white ">Right 3</h3>
            <h3 className="text-white ">Right 3</h3>
            <h3 className="text-white ">Right 3</h3>
          </div>
        </div>
      </div>
      {editProfile && (
        <CommonModal
          styleClass="fixed w-[60vw]  md:h-[80vh]  2xl:h-[65vh] top-[4vw] left-[20vw] bg-slate-900 scale-up-ver-bottom"
          onClose={() => setEditProfile(false)}
        >
          <EditProfile user={user} setEditProfile={setEditProfile} />
        </CommonModal>
      )}
    </div>
  );
};

export default Profile;

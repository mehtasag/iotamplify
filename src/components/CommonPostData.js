import React from "react";
import { XCircleIcon } from "@heroicons/react/solid";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { ChatIcon, BookOpenIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import moment from "moment";
import { selectUser } from "../app/slice/userSlice";
import { useSelector } from "react-redux";

const CommonPostData = ({ data, handleDelete }) => {
  const user = useSelector(selectUser);

  console.log("Data is", data?.comments?.items.length);
  return (
    <div
      key={data.id}
      className="group mt-3 h-[45vh] md:h-[55vh]   cursor-pointer  border-2 border-gray-500 rounded-xl overflow-hidden  pt-2"
    >
      <XCircleIcon
        onClick={() => handleDelete(data)}
        className="transition ml-3 ease-in-out delay-300 opacity-0 group-hover:opacity-80 hover:scale-150 w-4 h-4 right-2 bg-white rounded-2xl text-orange-400"
      />
      <Link to={`/${data.id}`}>
        <div className="flex flex-col text-center justify-around">
          <h4 className="text-[0.9rem] md:text-2xl mt-1  font-sans antialiased text-center font-bold text-gray-50">
            {data.title.length > 35
              ? `${data.title.slice(0, 40)}...`
              : data.title}
          </h4>
          <small className="text-1/2xl font-sans font-bold text-gray-500">
            Posted:
            {moment(new Date(data.createdAt).getTime()).fromNow()}
          </small>
        </div>
        <div className="w-full h-[65%] md:h-[75%]">
          {data && data.file.key.includes("mp4") ? (
            <video
              className="w-full h-full focus:border-none border-none md:w-[70vw] md:h-[100%] object-cover lazyloaded"
              controls
              autoPlay={true}
              loop={true}
            >
              <source
                src={`https://iotamplify2022235759-dev.s3.amazonaws.com/public/${data.file.key}`}
                type="video/mp4"
              />
            </video>
          ) : (
            <img
              className="w-full h-full  md:w-[80vw] md:h-[93%]  object-cover lazyloaded"
              src={`https://iotamplify2022235759-dev.s3.amazonaws.com/public/${data.file.key}`}
            />
          )}
        </div>
        {user ? (
          <div className="flex mt-3 md:mt-0 2xl:mt-5 text-center  justify-around w-full h-15 transition ease-in-out md:delay-300 md:opacity-0 md:group-hover:opacity-80   mb-4 2xl:mb-0 2xl:pb-0 pb-4">
            <div>
              <ThumbUpIcon className="h-6 w-6 text-gray-50 hover:scale-125" />
              <span className="fontFamily text-[0.8rem] font-bold text-gray-400">
                20
              </span>
            </div>
            <div classNam>
              <ChatIcon className="h-6 w-6 text-gray-50" />
              <span className="fontFamily text-[0.8rem] font-bold text-gray-400">
                20
              </span>
            </div>
            <div>
              <BookOpenIcon className="h-6 w-6 text-gray-50" />
              <span className="fontFamily text-[0.8rem] font-bold text-gray-400">
                20
              </span>
            </div>
          </div>
        ) : (
          <div className="opacity-0 group-hover:opacity-100 text-white 2xl:mt-3 text-center">
            <span className="font-bold text-[1rem] text-rose-500">
              Sign In to view reactions
            </span>
            <Link to="/login">
              <button className="fontFamily text-[0.9rem] font-semibold bg-yellow-400 text-slate-900 ml-3 p-2 rounded-2xl">
                Sign In Now !
              </button>
            </Link>
          </div>
        )}
      </Link>
    </div>
  );
};

export default CommonPostData;

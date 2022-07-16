import React from "react";
import { XCircleIcon } from "@heroicons/react/solid";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { ChatIcon, BookOpenIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import moment from "moment";

const CommonPostData = ({ data, handleDelete }) => {
  return (
    <div
      key={data.id}
      className="group mt-3    cursor-pointer  border-2 border-gray-500 rounded-xl overflow-hidden  pt-2"
    >
      <XCircleIcon
        onClick={() => handleDelete(data)}
        className="transition ml-3 ease-in-out delay-300 opacity-0 group-hover:opacity-80 hover:scale-150 w-4 h-4 right-2 bg-white rounded-2xl text-orange-400"
      />
      <Link to={`/${data.id}`}>
        <div className="flex flex-col text-center justify-around">
          <h4 className="text-2xl mt-1  font-sans antialiased text-center font-bold text-gray-50">
            {data.title.length > 35
              ? `${data.title.slice(0, 47)}...`
              : data.title}
          </h4>
          <small className="text-1/2xl font-sans font-bold text-gray-500">
            Posted:
            {moment(new Date(data.createdAt).getTime()).fromNow()}
          </small>
        </div>
        <div className="w-full h-[70%]">
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
              className="w-full h-full md:w-[80vw] md:h-[93%]  object-cover lazyloaded"
              src={`https://iotamplify2022235759-dev.s3.amazonaws.com/public/${data.file.key}`}
            />
          )}
        </div>
        <div className="flex mt-3 md:mt-0  justify-around w-full h-15  hover:bg-slate-400 mb-4 2xl:mb-0 2xl:pb-0 pb-4">
          <ThumbUpIcon className="transition ease-in-out delay-300  opacity-0 group-hover:opacity-80 h-6 w-6 text-gray-50" />
          <ChatIcon className="transition ease-in-out delay-300  opacity-0 group-hover:opacity-80  h-6 w-6 text-gray-50" />
          <BookOpenIcon className="transition ease-in-out delay-300  opacity-0 group-hover:opacity-80  h-6 w-6 text-gray-50" />
        </div>
      </Link>
    </div>
  );
};

export default CommonPostData;

import React from "react";
import { XCircleIcon } from "@heroicons/react/solid";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { ChatIcon, BookOpenIcon } from "@heroicons/react/outline";
import moment from "moment";
const CommonPostData = ({ data, handleDelete }) => {
  return (
    <div
      key={data.id}
      className="group w-[38vh] h-[44vh]  cursor-pointer max-w-md mx-auto border-2 border-gray-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl pt-2"
    >
      <XCircleIcon
        onClick={() => handleDelete(data)}
        className="transition ml-3 ease-in-out delay-300 opacity-0 group-hover:opacity-80 hover:scale-150 w-4 h-4 right-2 bg-white rounded-2xl text-orange-400"
      />
      <Link to={`/${data.id}`}>
        <div className="flex flex-col text-center justify-around p-2 ">
          <h5 className="text-1xl  font-sans antialiased text-center font-bold text-gray-50">
            {data.title.length > 35
              ? `${data.title.slice(0, 47)}...`
              : data.title}
          </h5>
          <small className="text-1/2xl font-sans font-bold text-gray-500">
            Posted:
            {moment(new Date(data.createdAt).getTime()).fromNow()}
          </small>
        </div>
        <div className="w-full h-[60%]">
          <img
            className=" w-[80vw] h-[93%] object-cover lazyloaded"
            src={`${process.env.REACT_APP_S3_URL}/${data.file.key}`}
          />
        </div>
        <div className="flex justify-around w-full h-15  hover:bg-slate-400 mb-4 pb-4">
          <ThumbUpIcon className="transition ease-in-out delay-300  opacity-0 group-hover:opacity-80 h-6 w-6 text-gray-50" />
          <ChatIcon className="transition ease-in-out delay-300  opacity-0 group-hover:opacity-80  h-6 w-6 text-gray-50" />
          <BookOpenIcon className="transition ease-in-out delay-300  opacity-0 group-hover:opacity-80  h-6 w-6 text-gray-50" />
        </div>
      </Link>
    </div>
  );
};

export default CommonPostData;

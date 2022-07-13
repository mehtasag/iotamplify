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
      className="group mt-3  w-[95%] md:w-[100%] md:h-[44vh] 2xl:h-[44vh] 2xl:w-[75%] h-[44vh]  cursor-pointer max-w-md mx-auto border-2 border-gray-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl pt-2"
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
          {data && (
            <img
              className="w-full h-full md:w-[80vw] md:h-[93%] object-cover lazyloaded"
              src={`https://iotamplify2022235759-dev.s3.amazonaws.com/public/${data.file.key}`}
            />
          )}
        </div>
        <div className="flex mt-3 md:mt-0  justify-around w-full h-15  hover:bg-slate-400 mb-4 pb-4">
          <ThumbUpIcon className="transition ease-in-out delay-300  opacity-0 group-hover:opacity-80 h-6 w-6 text-gray-50" />
          <ChatIcon className="transition ease-in-out delay-300  opacity-0 group-hover:opacity-80  h-6 w-6 text-gray-50" />
          <BookOpenIcon className="transition ease-in-out delay-300  opacity-0 group-hover:opacity-80  h-6 w-6 text-gray-50" />
        </div>
      </Link>
    </div>
  );
};

export default CommonPostData;

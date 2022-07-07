import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  UserCircleIcon,
  ReplyIcon,
} from "@heroicons/react/solid";
import moment from "moment";
import NotSignedIn from "./NotSignedIn";
const Comments = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [reply, setReply] = useState(false);
  console.log(data);
  return open ? (
    <div className="border border-sky-100 min-h-[40vh] max-h-[60vh] overflow-y-scroll  rounded md:mt-3 lg:mt-20">
      <div
        onClick={() => setOpen(!open)}
        className="mx-auto md:w-[16%] 2xl:w-[12%] 2xl-ml-8 mt-3 bg-red-400 flex p-2 align-center cursor-pointer  text-white font-semibold"
      >
        <h3 className="flex-[0.8] text-center">Hide Comments</h3>
        <ChevronUpIcon className="w-6 flex-[0.2] h-6 text-3xl text-white bg-red-400" />
      </div>
      {data?.items?.length > 0 ? (
        data?.items?.map((comment) => (
          <div
            key={comment.id}
            className="flex w-fit relative transition ease-in-out delay-300 scale-up-ver-bottom align-center gap-3 p-2"
          >
            <div className="flex">
              <UserCircleIcon className="w-10 h-10 mt-2 text-gray-200" />
            </div>

            <div>
              <div className="flex items-center content-center">
                <h4 className="text-extrabold text-1xl fontFamily text-white">
                  {comment.createdBy.substring(
                    0,
                    comment.createdBy.lastIndexOf("@")
                  )}
                </h4>
                <time className="text-semibold text-[0.8rem] pt-1 ml-1 text-slate-500">
                  {moment(new Date(comment.createdAt)).fromNow()}
                </time>
                <ReplyIcon
                  onClick={() => setReply(true)}
                  className="w-5 h-5 ml-3 2xl:w-8 2xl:h-8 hover:scale-125 text-gray-400 font-semibold cursor-pointer"
                />
              </div>
              <h5 className="text-cyan-200 text-1xl font-light  h-fit">
                {comment.content}
              </h5>
            </div>
          </div>
        ))
      ) : (
        <NotSignedIn />
      )}
      {reply && (
        <div className="absolute h-[15vh] rounded bottom-[0%] w-full  bg-stone-900 border-2 border-gray-100">
          <input type="text" value="enter now" />
          Hello World
        </div>
      )}
    </div>
  ) : (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="relative md:w-[16%] 2xl:w-[12%] ml-8 2xl:ml-0 mt-3 bg-red-400 flex p-2 align-center cursor-pointer  text-white font-semibold"
      >
        <h3 className="flex-[0.8] text-center">View Comments</h3>
        <ChevronDownIcon className="w-6 flex-[0.2] h-6 text-3xl text-white bg-red-400" />
      </div>
    </>
  );
};

export default Comments;

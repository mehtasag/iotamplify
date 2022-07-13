import { useState, useEffect } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  UserCircleIcon,
  ReplyIcon,
  PhotographIcon,
  VideoCameraIcon,
  ArrowUpIcon,
  PlusIcon,
} from "@heroicons/react/solid";

import moment from "moment";
import NotSignedIn from "./NotSignedIn";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../app/slice/userSlice";
import { createCommentReply } from "../libs";
import CommonModal from "./helper/CommonModal";
import EmptyComment from "./images/emptyComment.svg";
const Comments = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [replyModal, setReplyModal] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedComment, setSelectedComment] = useState([]);

  const [loading, setLoading] = useState(false);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!data) {
      setLoading(true);
    }
  }, [user]);

  const handleReply = (comment) => {
    setReplyModal(!replyModal);
    setSelectedComment(comment);
    console.log(comment);
  };

  const handleCreateComment = async () => {
    try {
      if (selectedComment !== []) {
        const replyData = {
          commentID: selectedComment.id,
          reply: message,
          createdBy: user.uid,
        };
        await createCommentReply(replyData, selectedComment.createdBy);
      }
      setMessage("");
      setReplyModal(false);
    } catch (err) {
      console.log(err);
    }
  };
  return open ? (
    <div className="relative border border-sky-100 min-h-[40vh] max-h-[60vh]   rounded md:mt-3 lg:mt-20">
      <div
        onClick={() => setOpen(!open)}
        className="mx-auto w-full  relative justify-between flex md:justify-center"
      >
        <div className="bg-red-700 w-[50vw] md:w-[14vw] mb-2 ml-3 md:ml-0 md:mb-0 flex  p-2 align-center cursor-pointer  text-white font-semibold">
          <h3 className="flex-[0.8]  text-center">Hide Comments</h3>
          <ChevronUpIcon className="w-6 flex-[0.2] h-6 text-3xl text-white bg-red-400" />
        </div>
        <div className="flex cursor-pointer rounded-full align-center mr-2 md:mr-0  md:absolute right-[2vw] md:mt-2   md:p-3 items-center md:border-2 md:border-blue-800">
          <button className="cursor-pointer bg-transparent hidden md:block  text-white font-bold fontFamily">
            Write Comment
          </button>
          <PlusIcon className="cursor-pointer  w-6 h-6  md:ml-2  text-white " />
        </div>
      </div>
      <div className="h-[35vh] md:wmb-[5vh] overflow-y-scroll">
        {user ? (
          <div>
            {data?.items?.length > 0 ? (
              data?.items?.map((comment, index) => (
                <div
                  id={comment.id}
                  key={comment.id}
                  className="border-gray-400"
                >
                  <div className="grid">
                    <div
                      key={comment.id}
                      className="flex  relative transition ease-in-out delay-300 scale-up-ver-bottom align-center gap-3 p-2"
                    >
                      <div className="flex">
                        <UserCircleIcon className="w-10 h-10 mt-2 text-gray-200" />
                      </div>

                      <div>
                        <div className="flex mt-2 items-center content-center">
                          <h4 className="text-extrabold text-[0.9rem] fontFamily text-white">
                            @
                            {comment.createdBy.substring(
                              0,
                              comment.createdBy.lastIndexOf("@")
                            )}
                          </h4>
                          <time className="text-semibold text-[0.8rem]  ml-2 text-slate-500">
                            {moment(new Date(comment.createdAt)).fromNow()}
                          </time>
                          <ReplyIcon
                            onClick={() => handleReply(comment)}
                            className="w-5 h-5  ml-3 2xl:w-7 2xl:h-7 hover:text-green-300 hover:scale-125 text-gray-400 font-semibold cursor-pointer"
                          />
                        </div>
                        <h5 className="text-cyan-200 text-1xl font-light  h-fit">
                          {comment.content}
                        </h5>
                      </div>
                    </div>
                    {comment?.replise?.items?.map((replyData) => (
                      <div
                        key={replyData.id}
                        className="flex ml-[2vw] w-fit relative transition ease-in-out delay-300 scale-up-ver-bottom align-center gap-3 p-2"
                      >
                        <div className="flex">
                          <UserCircleIcon className="w-8 h-8 mt-2 text-gray-200" />
                        </div>

                        <div className="mt-2">
                          <div className="flex items-center content-center">
                            <h4 className="text-extrabold text-[0.8rem] fontFamily text-orange-400">
                              {replyData.createdBy}
                            </h4>
                            <time className="text-semibold text-[0.9rem]  ml-1 text-slate-500">
                              {moment(new Date(replyData.createdAt)).fromNow()}
                            </time>
                          </div>
                          <h5 className="text-cyan-200 text-[0.8rem] font-light  h-fit">
                            {replyData.reply}
                          </h5>
                        </div>
                      </div>
                    ))}
                  </div>
                  {replyModal && (
                    <CommonModal onClose={() => setReplyModal(false)}>
                      <div className="absolute w-full scale-up-ver-bottom  rounded bottom-[0%] p-0 m-0   bg-stone-900">
                        <h3 className="text-white fontFamily bg-blue-400 w-full text-center h-8 align-center items-center">
                          Replying to
                          <span className="text-indigo-900 ml-2 font-bold">
                            {selectedComment?.createdBy}
                          </span>
                        </h3>
                        <input
                          type="text"
                          value={message}
                          className="w-full fontFamily h-[10vh] bg-slate-200 border-none outline-none focus-none"
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Write your reply"
                        />
                        <div className="flex space-between">
                          <div className="flex-1">
                            <button
                              onClick={() => handleCreateComment()}
                              className="bg-[#0892d0] p-2 m-1"
                            >
                              Comment Now
                            </button>
                            <button
                              onClick={() => setReplyModal(false)}
                              className="bg-rose-400 p-2 m-1"
                            >
                              Cancel
                            </button>
                          </div>

                          <div className="flex flex-[0.2] justify-around items-center">
                            <PhotographIcon className="md:2-8  cursor-pointer md:h-8 w-7 h-7 text-yellow-400" />
                            <VideoCameraIcon className="md:2-8 cursor-pointer  md:h-8 w-7 h-7 text-yellow-400" />
                          </div>
                        </div>
                      </div>
                    </CommonModal>
                  )}
                </div>
              ))
            ) : (
              <div className="grid  place-content-center">
                <h3 className="text-cyan-300 md:text-2xl 2xl:text-3xl text-2xl font-bold grid place-content-center mt-10 ">
                  No comments so Far !!! Be the first !!
                </h3>
                <img
                  src={EmptyComment}
                  className="object-contain h-[20vh] w-[30vw] mt-4 rounded"
                />
              </div>
            )}
          </div>
        ) : (
          <NotSignedIn />
        )}
      </div>
      {data?.items?.length > 0 && (
        <div className="relative  cursor-pointer flex bottom-0 rounded-2xl mb-2 text-white fontFamily font-bold  p-2 bg-[#0047ab] w-fit mx-auto">
          <ArrowUpIcon className="w-4 h-4  mr-2 text-white" />
          <button className="text-[0.8rem]">
            Showing {data?.items?.length} comments
          </button>
        </div>
      )}
    </div>
  ) : (
    <div
      onClick={() => setOpen(!open)}
      className="relative md:w-[16%] 2xl:w-[12%] ml-8 2xl:ml-0 mt-3 bg-red-400 flex p-2 align-center cursor-pointer  text-white font-semibold"
    >
      <h3 className="flex-[0.8] text-center">View Comments</h3>
      <ChevronDownIcon className="w-6 flex-[0.2] h-6 text-3xl text-white bg-red-400" />
    </div>
  );
};

export default Comments;

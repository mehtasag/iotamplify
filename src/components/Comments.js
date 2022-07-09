import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  UserCircleIcon,
  ReplyIcon,
  PhotographIcon,
  VideoCameraIcon,
  ArrowUpIcon,
} from "@heroicons/react/solid";
import moment from "moment";
import NotSignedIn from "./NotSignedIn";
import { useSelector } from "react-redux";
import { selectUser } from "../app/slice/userSlice";
import { createCommentReply } from "../libs";
import CommonModal from "./helper/CommonModal";
const Comments = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [replyModal, setReplyModal] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedComment, setSelectedComment] = useState([]);
  const user = useSelector(selectUser);

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
        className="mx-auto md:w-[16%] 2xl:w-[12%] 2xl-ml-8 mt-3 bg-red-700 flex p-2 align-center cursor-pointer  text-white font-semibold"
      >
        <h3 className="flex-[0.8] text-center">Hide Comments</h3>
        <ChevronUpIcon className="w-6 flex-[0.2] h-6 text-3xl text-white bg-red-400" />
      </div>
      <div className="h-[35vh] mb-[5vh] overflow-y-scroll">
        {data?.items?.length > 0 ? (
          data?.items?.map((comment, index) => (
            <div id={comment.id} key={comment.id} className="border-gray-400">
              <div className="grid">
                <div
                  key={comment.id}
                  className="flex  relative transition ease-in-out delay-300 scale-up-ver-bottom align-center gap-3 p-2"
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
                        onClick={() => handleReply(comment)}
                        className="w-5 h-5 ml-3 2xl:w-8 2xl:h-8 hover:scale-125 text-gray-400 font-semibold cursor-pointer"
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
                    className="flex ml-[3vw] w-fit relative transition ease-in-out delay-300 scale-up-ver-bottom align-center gap-3 p-2"
                  >
                    <div className="flex">
                      <UserCircleIcon className="w-10 h-10 mt-2 text-gray-200" />
                    </div>

                    <div>
                      <div className="flex items-center content-center">
                        <h4 className="text-extrabold text-1xl fontFamily text-orange-400">
                          {replyData.createdBy}
                        </h4>
                        <time className="text-semibold text-[0.8rem] pt-1 ml-1 text-slate-500">
                          {moment(new Date(replyData.createdAt)).fromNow()}
                        </time>
                      </div>
                      <h5 className="text-cyan-200 text-1xl font-light  h-fit">
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
          <NotSignedIn />
        )}
      </div>
      <div className="relative  cursor-pointer flex bottom-0 rounded-2xl mb-2 text-white fontFamily font-bold  p-2 bg-[#0047ab] w-fit mx-auto">
        <ArrowUpIcon className="w-4 h-4  mr-2 text-white" />
        <button className="text-[0.8rem]">
          Showing {data?.items?.length} comments
        </button>
      </div>
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

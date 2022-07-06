import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../app/slice/userSlice";
import { createComment } from "../libs";
import toast, { Toaster } from "react-hot-toast";
import { XCircleIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Comment = ({ data, setModal }) => {
  const [content, setContent] = useState("");
  const user = useSelector(selectUser);
  const handleCreate = async (e) => {
    e.preventDefault();
    const commentData = {
      postID: data.id,
      createdBy: user.email,
      content: content,
    };

    await createComment(commentData);
    toast.success("Comment successfully", {
      duration: 8000,
      position: "top-center",
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });
    setModal(false);
  };

  return (
    <div className="fixed h-[28%] rounded-lg w-full scale-up-ver-bottom bottom-0 md:w-[95%] p-0 m-auto md:h-[30%]  bg-indigo-300">
      {user ? (
        <div>
          <label className="block fontFamily tracking-wide text-cyan-50 text-medium font-bold m-2">
            Write your comment here
          </label>
          <XCircleIcon
            onClick={() => setModal(false)}
            className="absolute right-1 cursor-pointer text-black top-[1%] w-6 h-6 md:w-9 md:h-9"
          />
          <textarea
            className="appearance-none block w-full h-[18vh] bg-gray-200 text-gray-700 border font-bold rounded fontFamily py-3 px-4 md:mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Write about your post"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            disabled={
              content.length > 0 && user.email !== undefined ? false : true
            }
            className="bottom-0 p-2 bg-green-400 w-full md:w-1/6 text-1xl md:ml-2 fontFamily font-bold text-black"
            onClick={handleCreate}
          >
            Comment Now
          </button>
        </div>
      ) : (
        <div className="grid place-items-center mt-6">
          <h2 className="text-2xl md:text-3xl text-gray-700 font-extrabold fontFamily">
            You are not signed in !!!
          </h2>

          <Link className="mt-8" to="/login">
            <span className="bg-yellow-400 p-2 text-[0.8rem]  text-gray-700 font-bold rounded-2xl fontFamily">
              Sign in for free !
            </span>
          </Link>
          <p className="mt-3 ml-7 md:ml-3 md:ml-0 text-1xl font-bold text-cyan-900 fontFamily">
            SignIn to READ && WRITE comments and interact with other users !!
            comments
          </p>
        </div>
      )}
    </div>
  );
};

export default Comment;

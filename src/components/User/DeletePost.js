import React from "react";
import { deletePost } from "../../libs";
import CommonModal from "../helper/CommonModal";
const DeletePost = ({ selectedPost, setDeletePostModal }) => {
  const deleteUserPost = async () => {
    console.log("Data to be deletePost", selectedPost);
    await deletePost(selectedPost);

    setDeletePostModal(false);
  };
  return (
    <div className="fixed top-[30%] left-[30%] items-center grid bg-gray-200 w-[30%] h-[20vh] z-[100] ">
      <h3 className="text-gray-900 font-semibold text-center mb-4">
        Are you sure you want to delete?
      </h3>
      <div className="flex justify-around">
        <button
          className="text-stone-900 bg-green-400 w-[8vw] font-semibold fontFamily p-2 rounded-2xl"
          onClick={deleteUserPost}
        >
          Yes
        </button>
        <button
          className="text-gray-200 font-semibold fontFamily bg-rose-400 p-2 rounded-2xl"
          onClick={() => setDeletePostModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeletePost;

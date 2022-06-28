import React, { useState } from "react";
import { createPosts } from "../graphql/mutations";

import { API, graphqlOperation, Storage, Auth } from "aws-amplify";
import aws_exports from "../aws-exports";
import { createPost } from "../libs";
import { RewindIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  async function onChange(e) {
    const file = e.target.files[0];
    setImage(file);
  }

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    const postData = { title, description };

    await createPost(image, postData);
    setImage(null);
    setTitle("");
    setDescription("");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setImage(null);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="min-h-[100vh] max-h-fit  bg-gray-900">
      <Link to="/">
        <RewindIcon className="text-white w-10 h-10 animate-bounce pt-3" />
      </Link>
      <h3 className="text-2xl text-center md:text-4xl fontFamily text-pink-100 font-extrabold font-serif ml-4 md:pt-10">
        Write New Post
      </h3>
      <div className="w-full   p-3 md:p-5 md:m-auto 2xl:w-[30%] md:w-[40%] px-3 mb-6 md:mb-0">
        <label className="block uppercase fontFamily tracking-wide text-cyan-50 text-s font-bold mb-2">
          Post Title
        </label>
        <input
          className="appearance-none block  fontFamily font-bold w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight  focus:outline-none focus:bg-white"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Post Name"
        />
      </div>

      <div className="w-full m-auto 2xl:w-[30%] md:w-[40%] px-3 ">
        <label className="block uppercase fontFamily tracking-wide text-cyan-50 text-s font-bold mb-2">
          Description
        </label>
        <textarea
          className="appearance-none block w-full h-40 bg-gray-200 text-gray-700 border font-bold rounded fontFamily py-3 px-4 md:mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Write about your post"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex justify-center mt-8">
        <div className="flex flex-wrap"></div>
        <div className="rounded-lg shadow-xl bg-gray-50 md:w-[40%] 2xl:w-[30%]">
          <div className="m-4">
            <label className="inline-block mb-2 font-bold fontFamily text-gray-700">
              Upload Image(jpg,png,svg,jpeg)
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                <div className="flex flex-col cursor-pointer items-center justify-center pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      filule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    Select a photo
                  </p>
                </div>
                <input type="file" className="opacity-0" onChange={onChange} />
              </label>
            </div>
            {image && (
              <h5 className="fontFamily text-green-500 font-bold font-small">
                You selected {image?.name}
              </h5>
            )}
          </div>
        </div>
      </div>
      <div className="md:flex grid gap-8   w-full md:w-1/2 m-auto md:justify-center mt-5 p-2 pb-4 md:space-x-4">
        <button
          onClick={handleCancel}
          className="px-4   font-sans md:w-1/4 w-full py-2 text-white bg-red-700 rounded shadow-xl"
        >
          Cannel
        </button>
        <button
          onClick={handleSubmit1}
          className="px-4 py-2 w-full md:w-1/4 font-sans text-white bg-green-500 rounded shadow-xl"
        >
          Create Post
        </button>
      </div>
    </div>
  );
};

export default withAuthenticator(AddPost);

import moment from "moment";
import { useEffect, useState } from "react";
import { XCircleIcon } from "@heroicons/react/solid";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";
import { deletePost } from "../libs";
import { Link } from "react-router-dom";
import { ChatIcon, BookOpenIcon } from "@heroicons/react/outline";
import { getPostId } from "../app/slice/postSlice";
import Sidebar from "./Sidebar";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    return () => {
      fetchPosts();
    };
  }, []);

  async function fetchPosts() {
    try {
      const data = await API.graphql(graphqlOperation(listPosts));
      const postData = data.data.listPosts.items;
      setPosts(postData);
      console.log(postData);
    } catch (err) {
      console.log("error fetching todos");
    }
  }

  const handleDelete = (id) => {
    deletePost(id);
  };

  return (
    <div className="bg-gray-900 scroll-smooth">
      <h3 className="text-4xl font-sans antialiased text-center p-4 font-bold text-indigo-500">
        Recent Posts
      </h3>

      <div className="grid  gap-5 lg:grid-cols-4 hover:auto-cols-min mt-3 mb-20 z-0">
        {posts &&
          posts.map((data) => (
            <div
              key={data.id}
              className="group w-[38vh] h-[42vh] relative cursor-pointer max-w-md mx-auto border-2 border-gray-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl pt-2 z-0"
            >
              <Link to={`/${data.id}`}>
                <XCircleIcon
                  onClick={() => handleDelete(data.id)}
                  className="absolute transition ease-in-out delay-300 opacity-0 group-hover:opacity-80 hover:scale-150 w-4 h-4 right-2 bg-white rounded-2xl text-orange-400"
                />
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
                <div className="w-30 h-30">
                  <img
                    className="absolute block inset-0 w-[80vw] h-[45%] top-[10%] m-auto object-cover lazyloaded"
                    src={`${process.env.REACT_APP_S3_URL}/${data.file.key}`}
                  />
                </div>
                <div className="flex justify-around w-full absolute bottom-2 hover:bg-slate-400 p-2">
                  <ThumbUpIcon className="transition ease-in-out delay-300  opacity-0 group-hover:opacity-80 h-6 w-6 text-gray-50" />
                  <ChatIcon className="transition ease-in-out delay-300  opacity-0 group-hover:opacity-80  h-6 w-6 text-gray-50" />
                  <BookOpenIcon className="transition ease-in-out delay-300  opacity-0 group-hover:opacity-80  h-6 w-6 text-gray-50" />
                </div>
              </Link>
            </div>
          ))}
      </div>

      <div className="flex items-center w-1/6 m-auto p-2">
        <button className="grid pt-19 left-1/2 transform px-4 py-2 ml-1/2 w-full font-sans text-white bg-green-500 rounded shadow-xl mb-10">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Posts;

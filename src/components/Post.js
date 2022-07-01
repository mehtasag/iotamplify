import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { Link } from "react-router-dom";
import { RewindIcon } from "@heroicons/react/solid";
import * as queries from "../graphql/queries";
import moment from "moment";
import { Storage } from "aws-amplify";
import SearchTerm from "./SearchTerm";
const Post = () => {
  const [post, setPost] = useState([]);
  const [postId, setPostId] = useState("");
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;
    setPostId(id);

    const getPostData = async () => {
      if (isMounted && postId) {
        const postData = await API.graphql(
          graphqlOperation(queries.getPosts, {
            id: id,
          })
        );
        setPost(postData.data.getPosts);
      }
    };

    getPostData();

    return () => {
      isMounted = false;
    };
  }, [postId]);

  return (
    <div className="w-full bg-slate-900 2xl:lg-14 lg:p-10 min-h-screen max-h-fit">
      <SearchTerm />
      <div className="w-7 pt-6 md:pt-0 md:w-10">
        <Link to="/">
          <RewindIcon className="text-white md:h-10 animate-bounce w-fit" />
        </Link>
      </div>

      <div key={post.id} className="m-auto w-[95%]  mt-5 z-0 ">
        <h2 className="2xl:text-5xl md:text-4xl font-2xl font-bold text-gray-300 border-l-[2px] border-gray-600 pl-4 h-fit">
          {post.title}
        </h2>
        <div className="mt-3 md:mt-10">
          <small className="text-md m-3 pb-3 text-white pr-2 font-bold">
            Posted:
            <span className="text-green-400 ml-2">
              {moment(new Date(post.createdAt)).fromNow()}
            </span>
          </small>
          {post && (
            <img
              className="h-[35vh] mt-3 md:w-[80%] 2xl:w-[45vw] lg:w-[40vw] lg:h-[50vh] float-left w-[100vw] mr-2 lazyloaded rounded-2xl"
              src={`https://iotamplify2022235759-dev.s3.amazonaws.com/public/${post?.file?.key}`}
            />
          )}

          <article
            className="
          first-line:uppercase first-line:tracking-widest
          first-letter:text-7xl first-letter:font-bold first-letter:text-red-200
          first-letter:mr-3 first-letter:float-left
          text-gray-300 fontFamily antialiased tracking-wide text-sm md:text-medium 2xl:mt-2 2xl:leading-9 2xl:tracking-widest leading-8 md:leading-8"
          >
            {post?.description}
          </article>
        </div>
      </div>

      <div className="relative">
        <button className="md:fixed md:w-fit top-[40%] justify-center -right-10 md:rounded-3xl rounded:1xl transition ease-in-out hover:scale-110 delay-400 bg-blue-900 2xl:text-[1.4rem] w-[90%] m-5 p-2 text-white md:-rotate-90">
          Similar Blogs
        </button>
      </div>
    </div>
  );
};

export default Post;

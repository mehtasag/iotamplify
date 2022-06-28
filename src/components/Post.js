import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { Link } from "react-router-dom";
import { RewindIcon } from "@heroicons/react/solid";
import * as queries from "../graphql/queries";
import moment from "moment";
import { Storage } from "aws-amplify";
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

  console.log(post);

  return (
    <div className="w-full bg-slate-900 2xl:lg-14 lg:p-10 min-h-screen max-h-fit">
      <div className="w-10">
        <Link to="/">
          <RewindIcon className="text-white h-10 animate-bounce w-fit" />
        </Link>
      </div>

      <div key={post.id} className="m-auto w-[95%]  mt-5 z-0 ">
        <h2 className="2xl:text-5xl md:text-4xl font-2xl font-bold text-gray-300 border-l-[2px] border-gray-600 pl-4 h-fit">
          {post.title}
        </h2>
        <div className="mt-10">
          <small className="text-md text-white pr-2 font-bold">
            Posted:
            <span className="text-green-400 ml-2">
              {moment(new Date(post.createdAt)).fromNow()}
            </span>
          </small>
          {post && (
            <img
              className="h-[35vh] md:w-[80%] 2xl:w-[45vw] lg:w-[40vw] lg:h-[50vh] float-left w-[100vw] mr-2 lazyloaded rounded-2xl"
              src={`https://iotamplify4011e8e2456f420da820280d4f65e683152228-dev.s3.amazonaws.com/public/${post?.file?.key}`}
            />
          )}

          <article className="text-gray-300 fontFamily antialiased tracking-wide text-sm md:text-medium 2xl:mt-2 2xl:leading-9 2xl:tracking-widest leading-8 md:leading-8">
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

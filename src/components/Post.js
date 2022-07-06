import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { Link } from "react-router-dom";
import { RewindIcon } from "@heroicons/react/solid";
import * as queries from "../graphql/queries";
import moment from "moment";
import { ThumbUpIcon } from "@heroicons/react/solid";
import { ChatIcon, BookOpenIcon } from "@heroicons/react/solid";
import Comment from "./Comment";
import { likePost } from "../libs";
import Comments from "./Comments";
import { selectUser } from "../app/slice/userSlice";
import { useSelector } from "react-redux";
import {
  getUnAuthPosts,
  getAuthPosts,
} from "../components/helper/customQueries";

const reviewIconsClass =
  "bg-yellow-400 rounded-full hover:scale-125 w-8 h-8 p-1 md:p-2 cursor-pointer  md:w-10 md:h-10 text-black  font-extrabold";
const Post = () => {
  const [post, setPost] = useState([]);
  const [postId, setPostId] = useState(
    localStorage.getItem("postID") !== null
      ? localStorage.getItem("postID")
      : ""
  );
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const user = useSelector(selectUser);
  useEffect(() => {
    let isMounted = true;
    setPostId(id);
    localStorage.setItem("postID", id);
    const getPostData = async () => {
      if (isMounted && postId) {
        const postData = await API.graphql({
          query: !user ? getUnAuthPosts: getAuthPosts,
          variables: { id: id },
          authMode: !user ? "API_KEY" : "AMAZON_COGNITO_USER_POOLS",
        });
        setPost(postData.data.getPosts);
      }
    };

    getPostData();

    return () => {
      isMounted = false;
    };
  }, [postId]);

  const handleLikePost = async () => {
    const postData = {
      id: post.id,
      likes: post.likes + 1,
    };
    await likePost(postData);
  };
  return (
    <>
      <div className="w-full md:left-10 bg-slate-900 2xl:lg-14 lg:p-10 scroll-smooth p-0  min-h-screen max-h-fit">
        <div className="w-7 pt-10 md:pt-0 md:w-10">
          <Link to="/">
            <RewindIcon className="text-white md:h-8 animate-bounce w-fit" />
          </Link>
        </div>

        <div className="mt-2 md:flex place-items-center grid grid-cols-4 h-fit  w-full  md:justify-around md:w-1/2 md:float-right md:h-15 ">
          <h3 className="md:text-gray-400 p-2 text-rose-400 text-1xl font-bold">
            Rate this blog
          </h3>
          <div className="grid place-items-center">
            <ThumbUpIcon
              className={reviewIconsClass}
              onClick={handleLikePost}
            />
            <h3 className="text-white text-[0.8rem] font-bold fontFamily">
              <span className="text-green-500 font-bold fontFamily mr-2 border-b-2 ">
                {post?.likes}
              </span>
              Likes
            </h3>
          </div>
          <div
            onClick={() => setModal(!modal)}
            className="grid place-items-center cursor-pointer"
          >
            <ChatIcon className={reviewIconsClass} />
            <h3 className="text-white text-[0.8rem] font-bold fontFamily">
              <span className="text-green-500 font-bold fontFamily mr-2 border-b-2 ">
                {post?.comments?.items?.length}
              </span>
              Comments
            </h3>
          </div>
          <div className="grid place-items-center">
            <BookOpenIcon className={reviewIconsClass} />
            <h3 className="text-white text-[0.8rem] font-bold fontFamily">
              <span className="text-green-500 font-bold fontFamily mr-2 border-b-2 ">
                {post?.comments?.items?.length}
              </span>
              Bookmark
            </h3>
          </div>
        </div>

        <div key={post.id} className="m-auto w-[95%] mt-3  md:mt-5 z-0 ">
          <h2 className="prose-heading 2xl:text-5xl md:text-4xl font-2xl font-bold text-gray-300 border-l-[2px] border-gray-600 md:pb-2 pl-4 h-fit">
            {post.title}
          </h2>

          <div className="mt-3 ">
            <small className="text-md m-3 pb-3 text-white pr-2 font-bold">
              Posted:
              <span className="text-green-400 ml-2">
                {moment(new Date(post.createdAt)).fromNow()}
              </span>
            </small>
            {post && (
              <img
                className="h-[35vh]  md:w-[80%] 2xl:w-[45vw] lg:w-[40vw] lg:h-[50vh] float-left w-[100vw] mr-2 lazyloaded rounded-2xl"
                src={`https://iotamplify2022235759-dev.s3.amazonaws.com/public/${post?.file?.key}`}
              />
            )}

            <article
              className="first-line:tracking-widest
          first-letter:text-7xl first-letter:font-bold first-letter:text-red-200
          first-letter:mr-3 first-letter:float-left
          text-gray-300 fontFamily antialiased tracking-wide text-sm md:text-medium 2xl:mt-2 2xl:leading-9 2xl:tracking-widest leading-8 md:leading-8"
            >
              {post?.description}
            </article>
          </div>
        </div>
        <Comments data={post.comments} />

        <div className="relative">
          <button className="md:fixed md:w-fit top-[40%] justify-center -right-10 md:rounded-3xl rounded:1xl transition ease-in-out hover:scale-110 delay-400 bg-blue-900 2xl:text-[1.4rem] w-[90%] m-5 p-2 text-white md:-rotate-90">
            Similar Blogs
          </button>
        </div>
        {modal && (
          <div className="relative">
            <Comment data={post} setModal={setModal} />
          </div>
        )}
      </div>
    </>
  );
};

export default Post;

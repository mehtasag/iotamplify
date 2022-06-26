import moment from "moment";
import { useEffect, useState } from "react";
import { XCircleIcon } from "@heroicons/react/solid";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";
import { deletePost } from "../libs";
import { Link } from "react-router-dom";
import { ChatIcon, BookOpenIcon } from "@heroicons/react/outline";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(null);
  const [hasMoreTokens, setHasMoreTokens] = useState(true);

  useEffect(() => {
    let isMounted = true;
    if (isMounted && posts) {
      fetchPosts();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  async function fetchPosts() {
    try {
      const data = await API.graphql(graphqlOperation(listPosts, { limit: 4 }));
      const postData = data.data.listPosts.items;
      setPosts(postData);
      setToken(data.data.listPosts.nextToken);
    } catch (err) {
      console.log("error fetching todos");
    }
  }

  const handleDelete = (id) => {
    deletePost(id);
  };

  console.log(posts);
  const fetchPosts1 = async () => {
    if (token !== null) {
      const data = await API.graphql({
        query: listPosts,
        variables: { limit: 4, nextToken: token },
      });

      const newPosts = data.data.listPosts.items;
      setPosts(posts, posts.push(...newPosts));
      setToken(data.data.listPosts.nextToken);
      console.log(token);
      console.log(hasMoreTokens);
    } else {
      setHasMoreTokens(false);
    }
  };
  return (
    <div className="w-full bg-slate-900 2xl:lg-14 lg:p-10 scroll-smooth min-h-screen max-h-fit">
      <h3 className="text-4xl font-sans antialiased text-center p-4 font-bold text-indigo-500">
        Recent Posts
      </h3>

      <div className="grid  gap-5 lg:grid-cols-4 hover:auto-cols-min mt-3 mb-20 z-0">
        {posts &&
          posts.map((data) => (
            <div
              key={data.id}
              className="group w-[38vh] h-[44vh]  cursor-pointer max-w-md mx-auto border-2 border-gray-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl pt-2"
            >
              <Link to={`/${data.id}`}>
                <XCircleIcon
                  onClick={() => handleDelete(data.id)}
                  className="transition ml-3 ease-in-out delay-300 opacity-0 group-hover:opacity-80 hover:scale-150 w-4 h-4 right-2 bg-white rounded-2xl text-orange-400"
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
                <div className="w-full h-[60%]">
                  <img
                    className=" w-[80vw] h-[93%] object-cover lazyloaded"
                    src={`${process.env.REACT_APP_S3_URL}/${data.file.key}`}
                  />
                </div>
                <div className="flex justify-around w-full h-15  hover:bg-slate-400 mb-4 pb-4">
                  <ThumbUpIcon className="transition ease-in-out delay-300  opacity-0 group-hover:opacity-80 h-6 w-6 text-gray-50" />
                  <ChatIcon className="transition ease-in-out delay-300  opacity-0 group-hover:opacity-80  h-6 w-6 text-gray-50" />
                  <BookOpenIcon className="transition ease-in-out delay-300  opacity-0 group-hover:opacity-80  h-6 w-6 text-gray-50" />
                </div>
              </Link>
            </div>
          ))}
      </div>

      <div className="flex items-center w-1/6 m-auto p-2">
        {hasMoreTokens ? (
          <button
            onClick={fetchPosts1}
            className="grid pt-19 left-1/2 transform px-4 py-2 ml-1/2 w-full font-sans text-white bg-green-500 rounded shadow-xl mb-10"
          >
            Load More
          </button>
        ) : (
          <h3 className="text-white bg-red-400 p-2 rounded-2xl">End of list</h3>
        )}
      </div>
    </div>
  );
};

export default Posts;

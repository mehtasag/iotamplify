import moment from "moment";
import { useEffect, useState } from "react";
import { XCircleIcon } from "@heroicons/react/solid";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts, getPost } from "../graphql/queries";
import { deletePost } from "../libs";
import { Link } from "react-router-dom";
import { ChatIcon, BookOpenIcon } from "@heroicons/react/outline";
import { SearchTerm } from "./index";
import { useSelector } from "react-redux";
import CommonPostData from "./CommonPostData";

import { getSearchTermValue } from "../app/slice/postSlice";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(null);
  const [hasMoreTokens, setHasMoreTokens] = useState(true);

  const searchTerm = useSelector(getSearchTermValue);
  useEffect(() => {
    let isMounted = true;
    if (isMounted && posts) {
      fetchPosts();
    }
    getPostData();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredPost = searchTerm
    ? posts.filter((data) => data.title.includes(`${searchTerm}`))
    : [];

  console.log(filteredPost);
  async function fetchPosts() {
    try {
      const data = await API.graphql(graphqlOperation(listPosts, { limit: 8 }));
      const postData = data.data.listPosts.items;
      setPosts(postData);
      setToken(data.data.listPosts.nextToken);
    } catch (err) {
      console.log("error fetching todos");
    }
  }

  async function getPostData() {
    try {
      const data2 = await API.graphql(graphqlOperation(getPost));
      const postData = data2;
      // setPosts(postData);
      console.log(postData);
      // setToken(data.data.getPost.nextToken);
    } catch (err) {
      console.log("error fetching todos", err);
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
      <SearchTerm />
      <h3 className="text-4xl font-sans antialiased text-center p-4 font-bold text-indigo-500">
        Recent Posts
      </h3>

      <div className="grid  gap-5 lg:grid-cols-4 hover:auto-cols-min mt-3 mb-20 z-0">
        {filteredPost.length > 0
          ? filteredPost.map((data) => <CommonPostData data={data} />)
          : posts &&
            posts.map((data) => (
              <CommonPostData
                data={data}
                key={data.id}
                handleDelete={handleDelete}
              />
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

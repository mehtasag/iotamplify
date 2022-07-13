import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";
import { deletePost } from "../libs";
import { SearchTerm } from "./index";
import { useSelector } from "react-redux";
import CommonPostData from "./CommonPostData";
import { Link } from "react-router-dom";
import { getSearchTermValue } from "../app/slice/postSlice";
import * as subscriptions from "../graphql/subscriptions";

const Posts = ({ cuser }) => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(null);
  const [hasMoreTokens, setHasMoreTokens] = useState(true);
  const searchTerm = useSelector(getSearchTermValue);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && cuser !== [] && posts !== []) {
      fetchPosts();
    }
    subscribe();
    return () => {
      isMounted = false;
    };
  }, [cuser]);

  const filteredPost = searchTerm
    ? posts.filter((data) => data.title.includes(`${searchTerm}`))
    : [];

  async function fetchPosts() {
    try {
      const data = await API.graphql(graphqlOperation(listPosts, { limit: 8 }));
      const postData = data.data.listPosts.items;
      setPosts(postData);
      setToken(data.data.listPosts.nextToken);
    } catch (err) {
      console.log("error fetching todos", err);
    }
  }

  const handleDelete = (id) => {
    deletePost(id);
  };

  const subscribe = () => {
    API.graphql(graphqlOperation(subscriptions.onCreatePosts)).subscribe({
      next: ({ provider, value }) => console.log({ provider, value }),
      error: (error) => console.warn(error),
    });
  };

  const fetchPosts1 = async () => {
    if (token !== null) {
      const data = await API.graphql({
        query: listPosts,
        variables: { limit: 4, nextToken: token },
        authMode: !cuser ? "API_KEY" : "AMAZON_COGNITO_USER_POOLS",
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
    <div className="w-full bg-slate-900 2xl:p-14 lg:p-10 scroll-smooth min-h-screen max-h-fit">
      <div className=" md:flex my-auto">
        <div className="flex justify-center ml-3 md:ml-0">
          <h3 className="text-gray-100 pt-4  ml-2 font-bold text-1xl md:text-2xl">
            {cuser !== null ? `Hello ${cuser.username},` : "Hello Guest"}
          </h3>
          <br />
          {!cuser && (
            <Link
              className="align-item-center md:pt-1  ml-2 mt-4 text-center mx-auto"
              to="/login"
            >
              <span className="bg-yellow-400 p-2 text-[0.8rem]  text-gray-700 font-bold rounded-2xl fontFamily">
                Sign in here !
              </span>
            </Link>
          )}
        </div>
        <SearchTerm />
      </div>
      <h3 className="text-2xl text-center   md:text-4xl font-sans antialiased p-4 font-bold text-indigo-500">
        Recent Posts
      </h3>

      <div className="grid md:gap-3  2xl:gap-5  2xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3  mt-3 mb-20 z-0">
        {filteredPost?.length > 0
          ? filteredPost?.map((data) => <CommonPostData data={data} />)
          : posts &&
            posts.map((data) => (
              <CommonPostData
                data={data}
                key={data.id}
                handleDelete={handleDelete}
              />
            ))}
      </div>

      <div className="flex items-center justify-center w-full md:w-1/6 m-auto p-2">
        {hasMoreTokens ? (
          <button
            onClick={fetchPosts1}
            className="md:grid  w-fit md:w-full pt-19 left-1/2 transform px-4 py-2 ml-1/2  fontFamily text-white bg-green-500 rounded shadow-xl mb-10"
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

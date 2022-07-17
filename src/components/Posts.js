import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";
import { deletePost } from "../libs";
import { SearchTerm, Trending } from "./index";
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
    const sub = API.graphql({
      query: subscriptions.onCreatePosts,
    }).subscribe({
      next: (evt) => {
        const newPost = evt.value.data.onCreatePosts;
        const newPostData = [...posts, newPost];
        setPosts(newPostData);
      },
    });
    return () => {
      sub.unsubscribe();
    };
  }, [posts]);
  console.log(posts);
  useEffect(() => {
    let isMounted = true;

    if (isMounted && cuser !== [] && posts !== []) {
      fetchPosts();
    }

    return () => {
      isMounted = false;
    };
  }, [cuser]);

  const filteredPost = searchTerm
    ? posts.filter((data) => data.title.includes(`${searchTerm}`))
    : [];

  async function fetchPosts() {
    try {
      const data = await API.graphql(graphqlOperation(listPosts));
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
    } else {
      setHasMoreTokens(false);
    }
  };
  return (
    <div className="w-full bg-black  scroll-smooth min-h-screen max-h-fit">
      <div className="md:flex relative">
        <div className="w-full 2xl:ml-[5%] flex-1">
          <div className="md:flex w-full my-auto">
            <div className=" flex flex-[0.25]  h-fit justify-center ml-3 md:ml-0">
              <h3 className="text-gray-100 pt-2  ml-2 font-bold text-[0.9rem] md:text-[1.2rem]">
                {cuser !== null
                  ? `Hello ${cuser.username}daasdasdadadasdda,`
                  : "Hello Guest"}
              </h3>
              <br />
              {!cuser && (
                <Link
                  className="align-item-center md:pt-1  ml-2 mt-2 text-center mx-auto"
                  to="/login"
                >
                  <span className="bg-yellow-400 p-2 text-[0.8rem]  text-gray-700 font-bold rounded-2xl fontFamily">
                    Sign in here !
                  </span>
                </Link>
              )}
            </div>
            <div className="md:fixed w-full  md:right-10 mt-3 md:mt-0 md:top-3 overflow-scroll   md:w-[30vw] 2xl:w-[25vw]  z-[100] ">
              <SearchTerm />
            </div>
          </div>

          <div className="grid md:gap-3 md:w-[50%] 2xl:w-[40%]   2xl:gap-5 px-3 md:px-0   mt-6 md:ml-3 mb-20 z-0">
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

          <div className="flex items-center justify-center w-full md:w-1/6  p-2">
            {hasMoreTokens ? (
              <button
                onClick={fetchPosts1}
                className="md:grid  w-fit md:w-full pt-19 transform px-4 py-2   fontFamily text-white bg-green-500 rounded shadow-xl mb-10"
              >
                Load More
              </button>
            ) : (
              <h3 className="text-white bg-red-400 p-2 rounded-2xl">
                End of list
              </h3>
            )}
          </div>
        </div>

        <div className="md:fixed overflow-scroll overflow-y-scroll  flex-[0.3] 2xl:w-[22vw] md:w-[29vw] right-10 md:mt-20 h-[90vh] ">
          <Trending cuser={cuser} />
        </div>
      </div>
    </div>
  );
};

export default Posts;

import { useState, useEffect } from "react";
import { listTrendings } from "../graphql/queries";
import { API } from "aws-amplify";
const Card = ({ title, children }) => (
  <div className="relative bg-zinc-900 h-[42vh] pb-2 rounded-2xl border border-gray-600">
    <h3 className="font-extrabold ml-4 m-2 fontFamily text-[1.2rem] text-gray-200">
      {title}
    </h3>
    <div>{children}</div>
  </div>
);

// Random Color Generator
// const randColor = () =>  {
//     return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
// }

// console.log(randColor());

const Trending = ({ cuser }) => {
  const [trendingData, setTrendingData] = useState([]);
  useEffect(() => {
    let isMounted = true;
    const getPostData = async () => {
      const postData = await API.graphql({
        query: listTrendings,
        authMode: !cuser ? "API_KEY" : "AMAZON_COGNITO_USER_POOLS",
      });
      setTrendingData(postData.data.listTrendings.items);
    };
    if (isMounted) {
      getPostData();
    }

    return () => {
      isMounted = false;
    };
  }, [cuser]);

  const trendingNews = trendingData
    .flatMap((data) => data.resultData)
    .slice(0, 10);
  console.log(trendingNews);
  return (
    <div className="relative grid gap-6">
      <Card title="Trending News">
        <div className="grid overflow-scroll overflow-y-scroll h-[33vh] pb-6 relative gap-4">
          {trendingNews &&
            trendingNews.map((data, index) => (
              <div key={index} className="flex  items-center gap-2">
                <img
                  className="rounded-full md:w-[50px] md:h-[50px] 2xl:w-[65px] 2xl:h-[65px]  ml-2"
                  src={data.image}
                />
                <div className="flex relative w-full justify-between">
                  <h3 className="text-purple-400 font-semibold fontFamily text-[0.9rem]">
                    {data.name.slice(0, 40)}
                  </h3>

                  <span className="text-slate-200 absolute right-0 w-30 mr-5 p-1  text-[1rem]  border border-gray-600 rounded hover:bg-gray-800">
                    <a href={data.source}>View More</a>
                  </span>
                </div>
              </div>
            ))}
        </div>
        <button className="absolute bottom-0 text-white fontFamily font-bold w-full bg-red-400 py-4 ">
          Show More
        </button>
      </Card>
      <Card title="Trending Posts">
        <div className="grid overflow-scroll overflow-y-scroll h-[33vh] pb-6 relative gap-4">
          <div className="flex  items-center gap-2">
            <img
              className="rounded-full md:w-[50px] md:h-[50px] 2xl:w-[65px] 2xl:h-[65px]  ml-2"
              src="https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA"
            />
            <div className="grid">
              <h3 className="text-purple-400 font-semibold fontFamily text-[0.9rem]">
                Trending
              </h3>
              <span className="text-gray-400 text-[0.8rem]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae a, perferendis
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="rounded-full md:w-[50px] md:h-[50px] 2xl:w-[65px] 2xl:h-[65px]  ml-2"
              src="https://i.picsum.photos/id/291/536/354.jpg?hmac=bfJIaH0FmtH4w44We3rF30m4Kd8zK4jsOAbLFVh2E20"
            />
            <div className="grid">
              <div className="flex items-center gap-2">
                <h3 className="text-purple-400 font-semibold fontFamily text-[0.9rem]">
                  Trending
                </h3>
                <time className="text-green-600 font-bold text-[0.8rem]">
                  2 Days Ago
                </time>
              </div>
              <span className="text-gray-400 text-[0.8rem]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae a, perferendis
              </span>
            </div>
          </div>
          <div className="flex relative items-center gap-2">
            <img
              className="rounded-full md:w-[50px] md:h-[50px] 2xl:w-[65px] 2xl:h-[65px]  ml-2"
              src="https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA"
            />
            <div className="grid">
              <h3 className="text-purple-400 font-semibold fontFamily text-[0.9rem]">
                Trending
              </h3>
              <span className="text-gray-400 text-[0.8rem]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae a, perferendis
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="rounded-full md:w-[50px] md:h-[50px] 2xl:w-[65px] 2xl:h-[65px]  ml-2"
              src="https://i.picsum.photos/id/291/536/354.jpg?hmac=bfJIaH0FmtH4w44We3rF30m4Kd8zK4jsOAbLFVh2E20"
            />
            <div className="grid">
              <div className="flex items-center gap-2">
                <h3 className="text-purple-400 font-semibold fontFamily text-[0.9rem]">
                  Trending
                </h3>
                <time className="text-green-600 font-bold text-[0.8rem]">
                  2 Days Ago
                </time>
              </div>
              <span className="text-gray-400 text-[0.8rem]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae a, perferendis
              </span>
            </div>
          </div>
          <div className="flex relative items-center gap-2">
            <img
              className="rounded-full md:w-[50px] md:h-[50px] 2xl:w-[65px] 2xl:h-[65px]  ml-2"
              src="https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA"
            />
            <div className="grid">
              <h3 className="text-purple-400 font-semibold fontFamily text-[0.9rem]">
                Trending
              </h3>
              <span className="text-gray-400 text-[0.8rem]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae a, perferendis
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="rounded-full md:w-[50px] md:h-[50px] 2xl:w-[65px] 2xl:h-[65px]  ml-2"
              src="https://i.picsum.photos/id/291/536/354.jpg?hmac=bfJIaH0FmtH4w44We3rF30m4Kd8zK4jsOAbLFVh2E20"
            />
            <div className="grid">
              <div className="flex items-center gap-2">
                <h3 className="text-purple-400 font-semibold fontFamily text-[0.9rem]">
                  Trending
                </h3>
                <time className="text-green-600 font-bold text-[0.8rem]">
                  2 Days Ago
                </time>
              </div>
              <span className="text-gray-400 text-[0.8rem]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae a, perferendis
              </span>
            </div>
          </div>
        </div>
        <button className="absolute bottom-0 text-white fontFamily font-bold w-full rounded-2xl bg-stone-800 py-4 ">
          Show More
        </button>
      </Card>
    </div>
  );
};

export default Trending;

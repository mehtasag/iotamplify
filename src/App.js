import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { useEffect, useState } from "react";
import { Post, AddPost, Posts, About, Logout, Login } from "./components";
import Explore from "./components/User/Explore";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Auth, API } from "aws-amplify";
import { login } from "./app/slice/userSlice";
import { getUserData } from "./libs";
import Profile from "./components/Profile";
import Sidebar from "./components/User/Sidebar";
import { useEffectOnce } from "./components/useEffectOnce";
function App() {
  const [cuser, setCUser] = useState(null);
  const [admin, setAdmin] = useState(false);

  const dispatch = useDispatch();
  useEffectOnce(() => {
    let isMounted = true;
    const getUser = async () => {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        const profileData = await getUserData(user);
        dispatch(
          login({
            profileData,
          })
        );
      }
      console.log("User is:", user);
      setCUser(user);
    };

    getUser();

    return () => {
      isMounted = false;
    };
  });

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      if (user.signInUserSession.idToken.payload["cognito:groups"]) {
        const groups = user.signInUserSession.idToken.payload["cognito:groups"];

        if (groups.includes("Editors")) {
          setAdmin(true);
        }
      }
    });
  }, []);

  return (
    <div className="p-0 m-0 flex w-full h-screen">
      <Toaster />
      <BrowserRouter>
        <div className="flex-[0.2] w-[12vw]   md:w-[6.5vw] bg-black fixed h-screen z-[1000]">
          <Sidebar cuser={cuser} />
        </div>
        <div className="flex-1 ml-[10%] md:ml-[6.5%] 2xl:ml-[4%]">
          <Routes>
            <Route path="/" element={<Posts cuser={cuser} />} />
            <Route path="/about" element={<About />} />
            <Route path="/logout" element={<Logout />} />
            <Route exact path="/:id" element={<Post cuser={cuser} />} />

            <Route path="/addPost" element={<AddPost />} />
            <Route path="/explore" element={<Explore />} />

            <Route path="/login" element={<Login />} />

            <Route
              exact
              path="/users/:username"
              element={cuser ? <Profile cuser={cuser} /> : <Login />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

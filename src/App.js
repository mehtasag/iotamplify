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

import Profile from "./components/Profile";
import Sidebar from "./components/User/Sidebar";
function App() {
  const [cuser, setCUser] = useState(null);
  const [admin, setAdmin] = useState(false);

  const dispatch = useDispatch();

  
  useEffect(() => {
    let isMounted = true;
    const getUser = async () => {
      const user = await Auth.currentAuthenticatedUser();

      dispatch(
        login({
          uid: user.username,
          verified: user.attributes.email_verified,
          email: user.attributes.email,
          id: user.attributes.sub,
        })
      );
      setCUser(user);
      console.log(user);
    };

    getUser();

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  console.log(cuser);

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
  console.log(admin);

  return (
    <div className="p-0 m-0 flex w-full h-screen">
      <Toaster />
      <BrowserRouter>
        <div className="flex-[0.2] w-[6.5vw] bg-black fixed h-screen">
          <Sidebar />
        </div>
        <div className="flex-1 md:ml-[6.5%] 2xl:ml-[7%]">
          <Routes>
            <Route path="/" element={<Posts cuser={cuser} />} />
            <Route path="/about" element={<About />} />
            <Route path="/logout" element={<Logout />} />
            <Route exact path="/:id" element={<Post cuser={cuser} />} />

            <Route path="/addPost" element={<AddPost />} />
            <Route path="/explore" element={<Explore />} />

            <Route path="/login" element={<Login />} />

            {cuser && (
              <Route
                exact
                path="/users/:username"
                element={<Profile cuser={cuser} />}
              />
            )}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

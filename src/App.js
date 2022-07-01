import "./App.css";
import { Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { login, logout } from "./app/slice/userSlice";
import {
  Sidebar,
  Post,
  AddPost,
  Posts,
  About,
  Logout,
  Login,
} from "./components";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function App() {
  const [cuser, setCUser] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      const user = await Auth.currentAuthenticatedUser();

      dispatch(
        login({
          uid: user.username,
          verified: user.attributes.email_verified,
          email: user.attributes.email,
        })
      );
      setCUser(user);
    };

    return () => getUser();
  }, []);

  return (
    <div className="p-0 m-0">
      <BrowserRouter>
        <Sidebar cuser={cuser} />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/:id" element={<Post />} />

          <Route path="/addPost" element={<AddPost />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

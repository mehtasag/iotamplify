import "./App.css";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useEffect, useState } from "react";
import { Sidebar, Post, AddPost, Posts, About } from "./components";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function App() {
  const [cuser, setCUser] = useState([]);

  const params = useParams();

  useEffect(() => {
    const getUser = async () => {
      const user = await Auth.currentAuthenticatedUser();
      setCUser(user);
    };

    return () => getUser();
  }, []);
  return (
    <div className="p-0 m-0">
      {/* <div className="p-0 m-0 bg-gray-900 overflow-x-hidden min-h-full max-h-fit mb-95 pb-15"> */}
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/about" element={<About />} />

          <Route path="/:id" element={<Post />} />
          {cuser && <Route path="/addPost" element={<AddPost />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default withAuthenticator(App);

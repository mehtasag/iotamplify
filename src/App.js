import "./App.css";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useEffect, useState } from "react";
import { Sidebar, Post, AddPost, Posts, About, Logout } from "./components";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function App() {
  const [cuser, setCUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const user = await Auth.currentAuthenticatedUser();
      setCUser(user);
    };

    return () => getUser();
  }, []);

  console.log("User is", cuser);
  return (
    <div className="p-0 m-0">
      <BrowserRouter>
        <Sidebar cuser={cuser} />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />

          {cuser && (
            <>
              <Route path="/:id" element={<Post />} />
              <Route path="/addPost" element={<AddPost />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default withAuthenticator(App);

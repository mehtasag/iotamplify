import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { useEffect, useState } from "react";
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
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="p-0 m-0">
      <Toaster />
      <BrowserRouter>
        <Sidebar />
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

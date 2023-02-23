import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PostPage from "./indexPages/PostPage";
import SignUpPage from "./indexPages/SignUpIndex";
import LoginPage from "./indexPages/LoginIndex";
import CreatePost from "./indexPages/CreatePostIndex";
import Header from "./components/Header";


const RouteSwitch = () => {
  return (
    <div>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post" element={<PostPage/>} />
        <Route path="/sign-up" element={<SignUpPage/>} />
        <Route path="/log-in" element={<LoginPage/>} />
        <Route path="/create-post" element={<CreatePost/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;



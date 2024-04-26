import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/index.home.jsx";
import AddPost from "./page/addPost/index.addPost.jsx";
import PostDetails from "./page/postDetails/index.postDetails.jsx";
import MainTemplate from "./component/mainTemplate/template/index.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./store/slice/postSlice.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <Routes>
      <Route element={<MainTemplate />}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/addPost"} element={<AddPost />} />
        <Route path={"/post/:postID"} element={<PostDetails />} />
        <Route path={"*"} element={<div>Oups, you seems lost</div>} />
      </Route>
    </Routes>
  );
}

export default App;

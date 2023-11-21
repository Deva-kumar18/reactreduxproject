import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./post.css";
import { selectAllPosts, getError, postStatus, fetchPosts } from "./postSlice";
import { useEffect } from "react";
import PostRen from "./PostRen";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const status = useSelector(postStatus);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);
  let contentt;
  if (status === "loading") {
    contentt=<p>'loading...'</p>
  } else if (status === "succeeded") {
    contentt = posts.map((post) => (
      <PostRen key={post.id} post={post}/>
    ));
  }else if(status==="failed"){
    contentt=<p>{error}</p>
  }

  return (
    <div className="container">
      <h1>PostList</h1>
      <div className="p-container">{contentt} </div>
    </div>
  );
};

export default PostList;

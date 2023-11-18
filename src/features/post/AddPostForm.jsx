import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addPost } from "./postSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const onSavePostClicked = () => {
    if (title && content != null) {
      dispatch(
        addPost(
          title,
          content,
        ),
        setTitle(""),
        setContent("")
      );
    }
  };

  return (
    <div className="post-cont">
      <h1>Add new post</h1>
      <div className="i-container">
      <label htmlFor="postTitle">Post title:</label>
      <input
        type="text"
        value={title}
        id="postTitle"
        onChange={(e) => setTitle(e.target.value)}
        name="postTitle"
      />
      </div>
      <div className="i-container">
      <label htmlFor="postContent">Post Content:</label>
      <input
        type="text"
        value={content}
        id="postContent"
        onChange={(e) => setContent(e.target.value)}
        name="postContent"
      />
      </div>
      <button type="button" className="s-btn" onClick={onSavePostClicked}>
        save Post
      </button>
    </div>
  );
};

export default AddPostForm;

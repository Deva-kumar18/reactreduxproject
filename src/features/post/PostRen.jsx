import React from 'react'



const PostRen = ({post}) => {
  return (
    <div>
        <li >
        <div className="posts-container">
          <h1>{post.title}</h1>
          <div className="post-content">{post.body}</div>
        </div>
      </li>
    </div>
  )
}

export default PostRen
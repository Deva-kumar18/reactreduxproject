import React from 'react'
import { useSelector } from 'react-redux'
import './post.css'
import { selectAllPosts } from './postSlice'

const PostList = () => {
    const posts =useSelector(selectAllPosts)
    const renderPosts = posts.map((pos)=>
    <li key={pos.id}><h1>{pos.title}</h1><div className='post-content'>{pos.content.substring(0,100)}</div></li>)
  return (
    
    <div className='container'><h1>PostList</h1>
    <div className='p-container'>{renderPosts}</div></div>
  )
}

export default PostList
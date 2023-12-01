'use client';
import { Post } from "@/Models/Post";
import { AppContext } from "@/context/appContext"
import { useContext } from "react";

import styles from './post.module.css';

export default function PostPage(){
  const context = useContext(AppContext);
  return (
    <div className={styles.posts}>
      {context.state.posts.map((post: Post) =>
        <div 
          className="flex flex-col mb-10 border-solid border-2 border-gray-100 p-5" 
          key={post.id}>
          <span>Id: {post.id}</span>
          <span>Title: {post.title}</span>
          <span>Body: {post.body}</span>
        </div>
      )}
    </div>
  )
}
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    let url = 'http://localhost/WP/wp-headless/server/wp-json/wp/v2/posts';    
    axios.get(url).then((res)=>{
      setPosts(res.data);
    });
  }, []);
console.log('posts', posts);

  return(
    <>
      <h3 className='text-2xl font-bold'>Posts</h3>
      <div className='w-4/5 py-10 m-auto flex justify-between align-middle flex-wrap gap-10'>
      
      {
        Object.keys(posts).length ? posts.map((post)=>{
          console.log(post.title.rendered)
          return (
          <div key={post.id} className='card p-3 w-[330px] shadow-lg rounded-lg'>
            <Link to={`/posts/${post.id}`}>
              <img src="https://via.placeholder.com/500" />
              <h2 className='text-lg font-bold'>{post.title.rendered}</h2>
              <p> {post.excerpt.rendered}</p>
            </Link>
          </div>
          )

        }) : ('Loading ...')
      }
      </div>
    </>
  ) 

}
export default Posts;
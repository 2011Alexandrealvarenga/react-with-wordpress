import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    {
      posts && posts.map((post)=>{
        console.log(post.title.rendered)
        return (
        <div key={post.id}>
          <h2>{post.title.rendered}</h2>
          <p> {post.excerpt.rendered}</p>
        </div>
        )

      })
    }
    </>
  ) 

}
export default Posts;
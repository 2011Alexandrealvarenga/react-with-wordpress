import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    let url = `${process.env.REACT_APP_API_ROOT}/posts`;    
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
        return <p key={post.id}>{post.title.rendered}</p>

      })
    }
    </>
  ) 

}
export default Posts;
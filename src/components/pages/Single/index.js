import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Single = () =>{
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(()=>{
    let url = `http://localhost/WP/wp-headless/server/wp-json/wp/v2/posts/${id}`;
    axios.get(url).then(res => {
      console.log('res', res);
      setPost(res.data);

    }).catch(err =>{
      console.log('error:', err.message);
    });
  }, []);
  return(
    <>
      {
        Object.keys(post).length ? (
          <div className="p-5">
            <div>
              <img src={post.featured_src}/>
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                {post.title.rendered}
              </h1>
            </div>
            <p dangerouslySetInnerHTML={{__html:post.content.rendered}}></p>

          </div>
        ) : (<p>Post nao encontrado</p>)
      }

    </>
  )
}
export default Single;
import React, { useState,useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyt6vbchNgTblyoU4Pf8T7UmW5B3KR9ypYZvN5VY0ngA&s=10",
      caption: "No Content available",
    },
  ])


  useEffect(() => {
    axios
      .get('http://localhost:3000/posts')
      .then((response) => {
     
        setPosts(response.data.posts);
       
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <>
    <div>
      <h1>Feed</h1>

        {posts.map((elem) => (
                  <div className="post"key={elem._id}>
          
            <img src={elem.image} alt={elem.caption} />
            <p>{elem.caption}</p>
          </div>
              
        ))}
    
    </div>
    </>
  )
}

export default Feed;

import React from "react";
import {Twitter} from "../../components/twitt/twitter";
import  {images}  from "../../assets/index";
import "./Post.scss";

export const Post = () => {
  const posts = [
    {
      _id: "1",
      title:"post 1",
      subtile: "post 1",
      description: "Descripción del servicio 1",
      created_at: "11/10/23",
      avatar: images.post1,
    },
    {
      _id: "2",
      title:"post 2",
      subtile: "post 2",
      description: "Descripción del servicio 2",
      created_at: "11/10/23",
      avatar: images.post2,
    },
    {
      _id: "3",
      title:"post 3",
      subtile: "post 3",
      description: "Descripción del servicio 3",
      created_at: "11/10/23",
      avatar: images.post3,
    },
    {
      _id: "4",
      title:"post 4",
      subtile: "post 4",
      description: "Descripción del servicio 4",
      created_at: "11/10/23",
      avatar: images.post4,
    }
    ,
  ];
  return (
    <div className="services-page-content">
      <Twitter postsParam={posts}></Twitter>
    </div>
  );
};

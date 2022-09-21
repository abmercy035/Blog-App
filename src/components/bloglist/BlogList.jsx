/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./bloglist.css";
import Img from "../img/Img";
import Text from "../text/Text";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import useFetch from "../../states/useFetch";
import FetchUsers from "../fetchusers/FetchUsers";

export default function BlogList({ blogs, title, pagination }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map(
        (blog, index) =>
          (pagination - 1) * 5 < index &&
          index <= pagination * 5 && (
            <div key={index} data-aos="flip-up" className="blog-preview">
              <h2 className="post-title"> {blog.title} </h2>
              <div className="post-category">
                <Link to={"/posts/?categories=" + blog.category}>
                  Category: <span>{blog.category}</span>
                </Link>
              </div>
   
              <Img
                cls="post-img"
                src={blog.img + "f0" +Number(Math.floor(Math.random() * 1080)) + "/" + "0f" +Number(Math.floor(Math.random() * 9080))  + "/?text=" + blog.title.slice(0, 5)}
              />
              <Text cls="post-body" txt={blog.body.slice(0, 200)} />
              <div className="post-foot">
                <FetchUsers from={blog} />
                <p>{blog.time}</p>
              </div>
              <Link to={`/posts/${blog.id}`}>
                <b> Read More... </b>
              </Link>
            </div>
          )
      )}
    </div>
  );
}

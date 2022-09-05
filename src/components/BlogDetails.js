/** @format */

import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../states/useFetch";
import FetchUsers from "./FetchUsers";
import "../styles/blogdetails.css";
import Img from "./Img";
import Aside from "./Aside";
import MainFooter from "./MainFooter";
export default function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isFetching,
  } = useFetch("http://localhost:5000/posts/" + id);
  const navigate = useNavigate();
  const handleDelete = () => {
    fetch("http://localhost:5000/posts/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
   <>
    <div className="article">

      {isFetching && <div> is loading... </div>}
      {error && <div> {error} </div>}
      {blog && (
        
        <article>
                  <h2 className="article-title"> {blog.title} </h2>
          
          <p className="article-details">
          
          <Link to={"/post/?categories=" + blog.category}>Category: 
           <span> {blog.category}</span>
          </Link>
            <FetchUsers from={blog} />
          <span className="article-time">{blog.time}</span>
          </p>

          <Img
            cls="article-img"
            src={blog.img + Number(Math.floor(Math.random() * 10))}
          />
          <div className="article-body"> {blog.body} </div>
          {/* <button className="article-delbtn" onClick={handleDelete}>
            Delete
          </button> */}
        </article>

      )}
    
      <Aside />
    </div>
    <MainFooter />
   </>
  );
}

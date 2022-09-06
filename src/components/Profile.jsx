/** @format */

import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../states/useFetch";
import FetchUsers from "./FetchUsers";
import "../styles/profile.css";
import Img from "./Img";
import Aside from "./Aside";
import MainFooter from "./AddPost";
export default function Profile() {
  const { id } = useParams();
  const {
    data: user,
    error,
    isFetching,
  } = useFetch("http://localhost:5000/users/" + id);
  const navigate = useNavigate();
  
  return (
   <>
    <div  id="profile">

      {isFetching && <div> is loading... </div>}
      {error && <div> {error} </div>}
      {user && (
        
        <section>

                  <img src={user.avatar} className="profile-avatar" alt="profile-avatar" />
                  <h2 className="profile-name"> {user.username} </h2>
          
          {/* <p className="article-details">
          
          <Link to={"/post/?categories=" + user.category}>Category: 
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
          </button>  */}
        </section>
      )}
      {/* <Aside /> */}
    </div>
    <div id="copyright">Javascript Enthusiast &copy;2022</div>
   </>
  );
}

/** @format */

import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../../states/useFetch";
import FetchUsers from "../fetchusers/FetchUsers";
import "./blogdetails.css";
import Img from "../img/Img";
import Aside from "../aside/Aside";
import profileImg from "../../img/profile-settings.png";
import AOS from "aos";
import "aos/dist/aos.css";
import MainFooter from "../addpost/AddPost";
import Input from "../input/Input";
export default function BlogDetails() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { id } = useParams();
  const { cat } = useParams();
  const {
    data: blog,
    error,
    isFetching,
  } = useFetch("http://localhost:5000/posts/" + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:5000/posts/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <>
      <div className="article">
        <div id="article-menu-header">
          <div id="article-toggle-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span id="article-title">Now Reading...</span>
          <Img cls="article-setting-icon" src={profileImg} />
        </div>

        {isFetching && <div> is loading... </div>}
        {error && <div> {error} </div>}

        {blog && (
          <>
            <article>
              <h2 className="article-title"> {blog.title} </h2>
              <p className="article-details">
                <Link to={"/posts/?categories=" + blog.category}>
                  Category:
                  <span> {blog.category}</span>
                </Link>
                <FetchUsers from={blog} />
                <span className="article-time">{blog.time}</span>
              </p>

              <Img
                cls="article-img"
                // src={blog.img + "f0" +Number(Math.floor(Math.random() * 1080)) + "/" + "0f" +Number(Math.floor(Math.random() * 9080))  + "/?text=" + blog.title.slice(0, 5)}
                src={blog.img + Number(Math.floor(Math.random() * 10))}
              />
              <div className="comment-head"> {blog.body} </div>
              {/* <button className="article-delbtn" onClick={handleDelete}>
            Delete
          </button> */}
            </article>

            <section className="comments">
              <h2 className="comments-title"> Comments</h2>
              {blog.comments.map((comments, index) => {
                return (
                  <div
                    data-aos="flip-up"
                    key={index}
                    className="categories-samples"
                  >
                    <span className="comment-user">
                      <Img
                        src={
                          comments.pic +
                          "f0" +
                          Number(Math.floor(Math.random() * 1080)) +
                          "/" +
                          "0f" +
                          Number(Math.floor(Math.random() * 9080)) +
                          "/?text=" +
                          comments.username.slice(0, 1)
                        }
                        className="comment-user-avatar"
                      />
                        {comments.username}
                    </span>
                    {comments.comment}
                  </div>
                );
              })}

              <div data-aos="fade-up" className="new-comment">
                <h4> Comment on this Post</h4>
                <form action="./post" method="post">
                  <Input type="textarea" id="comment-input" />
                  <Input type="submit" className="submit" />
                </form>
              </div>
            </section>
          </>
        )}
        {/* 
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../states/useFetch'
import './mostengaged.css'

export default function MostEngaged () {
  const { data: blogs, error, isFetching } = useFetch(
    'http://localhost:5000/posts/'
  )
  const { data: users, Error, IsFetching } = useFetch(
    'http://localhost:5000/users/'
  )
  
 
  return (
    <div className='most-engaged' id="mostengaged">
      {blogs?.map((blogComments, index) => {
        if (blogComments?.comments.length > 3) {
          return (
            <div data-aos="flip-down" key={index} className='mg-preview'>
              <Link to={`/posts/${blogComments.id}`}>
                {blogComments?.title}
              </Link>
              {users?.map(user => {
                if (user?.userId === blogComments?.userId) {
                  return (
                    <span key={index}>
                      <img
                        src={
                          user.avatar + Number(Math.floor(Math.random() * 10))
                        }
                        alt={'profile'}
                      />
                      <Link to={`/profile/${user.id}`}>
                        {user.username}
                      </Link>
                    </span>
                  )
                }
              })}
            </div>
          )
        }
      })}
    </div>
  )
}
 */}

        {blog && <Aside />}
      </div>
      <div id="copyright">Javascript Enthusiast &copy;2022</div>
    </>
  );
}

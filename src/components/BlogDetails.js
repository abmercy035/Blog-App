/** @format */

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../states/useFetch";
export default function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isFetching,
  } = useFetch("http://localhost:5000/posts/" + id);
const navigate = useNavigate();
  const handleDelete = () =>{
    fetch("http://localhost:5000/posts/" + blog.id, {
      method : 'DELETE'
    }).then(() =>{
       navigate('/')
      })
    };
  return (
    <div className="blog-details">
      {isFetching && <div> is loading... </div>}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h3> {blog.title} </h3>
          <p> Post by user {blog.id} </p>
          <div> {blog.body} </div>
          <button onClick={handleDelete}> Delete </button>
        </article>

      )}
    </div>
  );
} 

/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./create.css"
export default function Create() {
  const [blog, setBlog] = useState({});
  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };
  const [isPending, setIsPending] = useState(false);
 const navigate = useNavigate();

  const submitForm =(e) => {
    e.preventDefault();
    const title = blog.title, body = blog.body, author = blog.author;
    const blogPost = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogPost),
    }).then(() => {
      console.log("new blog added");
    setIsPending(false);
    navigate('/');
    });

  };
  return (
    <div className="create">
      <h2>Add A New Blog</h2>
      <form onSubmit={submitForm} className="create-form">
        <label htmlFor=""> Blog title: </label>
        <input
          type="text"
          required
          name="title"
          onChange={handleChange}
          value={blog.title}
        />
        <label htmlFor=""> Blog body: </label>
        <textarea
          required
          name="body"
          onChange={handleChange}
          value={blog.body}></textarea>
        <label htmlFor=""> Blog author: </label>
        <select name="author" onChange={handleChange} value={blog.author}>
          <option value="abraham"> abraham </option>
          <option value="dayo"> dayo </option>
        </select>
       { !isPending && <button > Add Blog</button>}
       { isPending && <button disabled={true} > Adding Blog </button>}
      </form>
      <div>{blog.title}</div>
      <div>{blog.body}</div>
      <div>{blog.author}</div>
    </div>
  );
}

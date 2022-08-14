/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/bloglist.css'
// import BlogDetails from './BlogDetails';
import Img from './Img'
import Text from './Text'

export default function BlogList ({ blogs, title, pagination }) {
  return (
    <div className='blog-list'>
      <h1>{title}</h1>
      {blogs.map(
        (blog, index) =>
          (pagination - 1) * 5 < index &&
          index <= pagination * 5 && (
            <div key={blog.id} className='blog-preview'>
              <h2 className='post-title'> {blog.title} </h2>

              <div className='post-category'>
                <Link to={'/post/?categories=' + blog.category}>
                  Category: <span>{blog.category}</span>
                </Link>
              </div>
              <Img
                cls='post-img'
                src={blog.img + Number(Math.floor(Math.random() * 10))}
              />
              <Text cls='post-body' txt={blog.body.slice(1, 200)} />
              <div className='post-foot'>
                <p>
                  <Img
                    cls='post-avatar'
                    src={blog.img + Number(Math.floor(Math.random() * 10))}
                  />
                  Post by user {blog.userId}
                </p>
                <p>{blog.time}</p>
              </div>
              <Link to={`/posts/${blog.id}`}>
                <b> Read More... </b>
              </Link>
            </div>
          )
      )}
    </div>
  )
}

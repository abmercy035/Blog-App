/** @format */

import React from 'react'
import { Link } from 'react-router-dom'

// import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../states/useFetch'
import BlogList from './BlogList'
import '../styles/aside.css'
export default function Aside () {
  const { data: blogs, error, isFetching } = useFetch(
    'http://localhost:5000/posts/'
  )
  return (
    <div className='side-blog'>
      {error && <div> {error} </div>}
      {isFetching && <div> Loading... </div>}
      {blogs && (
        <div className='recent-blog'>
          <h3>{'Recent'}</h3>

          {blogs.map((blogComments, index) => {
            
            if(index < 3)
            return (
          <div key={index} className='blog-preview'>
                <Link to={`/posts/${blogComments.postId}`}>
                  {
                    blogComments?.comments?.map(comments => {
                  return  <>
                    {comments?.comment}
                    <hr></hr>
                    </>
             }) }
                </Link>
            {blogComments?.category}
                       </div>
                )
     
          })}
        </div>
      )}
    </div>
  )
}

//               index < 3 ? (
//  blogComments.map((comment, index) =>
//                   <div key={blog.id} className='blog-preview'>
//                     <Link to={`/posts/${blog.postId}`}>
//                       <h3> {blog.title} </h3>
//                       <div> {blog.body} </div>
//                       <p> Post by user {blog.id} </p>
//                     </Link>
//                   </div>

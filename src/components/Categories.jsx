import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../states/useFetch'
import "../styles/categories.css"

export default function Categories ({ category }) {
  const { data: blogs, error, isFetching } = useFetch (
    'http://localhost:5000/posts/'
 )
 
  return (
    <div className='blog-categories'>
      {blogs?.filter((blogComments, index) => {
        
          if (blogComments?.category === category) return blogComments
        }).map((blogComments, index) => {
          if (index < 1) {
            return (
              <div key={index} className='categories-samples'>

                <Link to={`/posts/${blogComments.postId}`}>
                  {blogComments?.title}
                </Link>

                <Link to={`/posts/${blogComments.postId}`} className="cat-link">
                  More Post On {blogComments?.category}
                </Link>
              </div>
            )
          }
        })}
    </div>
  )
}

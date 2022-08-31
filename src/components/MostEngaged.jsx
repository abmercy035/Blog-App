import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../states/useFetch'
import '../styles/mostengaged.css'
export default function MostEngaged () {
  const { data: blogs, error, isFetching } = useFetch(
    'http://localhost:5000/posts/'
  )
  const { data: users, Error, IsFetching } = useFetch(
    'http://localhost:5000/users/'
  )
  return (
    <div className='most-engaged'>
      {blogs?.map((blogComments, index) => {
        if (blogComments?.comments.length > 3) {
          return (
            <div key={index} className='mg-preview'>
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
                      <Link to={`/posts/${user.id}`}>
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

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../states/useFetch'
import '../styles/mostengaged.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function MostEngaged () {
  const { data: blogs, error, isFetching } = useFetch(
    'http://localhost:5000/posts/'
  )
  const { data: users, Error, IsFetching } = useFetch(
    'http://localhost:5000/users/'
  )
  
 useEffect(() => {
  AOS.init({ duration : 1000})
 }, [])

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

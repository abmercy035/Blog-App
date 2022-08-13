import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../states/useFetch'

export default function MostEngaged() {
  const { data: blogs, error, isFetching } = useFetch(
  'http://localhost:5000/posts/'
)
const { data: users, Error, IsFetching } = useFetch(
  'http://localhost:5000/users/'
)
return (
    <div className='most-engaged'>{
  blogs?.map((blogComments, index) => {
    if (blogComments?.comments.length > 3) {
      return (
        <div key={index} className='blog-preview'>
          <Link to={`/posts/${blogComments.postId}`}>
            {blogComments?.body.slice(1, 80)}
          </Link>
          <div>
            {users?.map(user => {
              if (user?.userId === blogComments?.userId) {
                return (
                  <div>
                    <img
                      src={user.avatar + Number(Math.floor(Math.random() * 10))}
                      alt={'profile'}
                    />
                    {user.username}
                  </div>
                )
              }
            })}
          </div>
        </div>
      )
    }
  })
}
</div>
  )
}

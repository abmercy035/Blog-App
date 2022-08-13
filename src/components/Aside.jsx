/** @format */

import React from 'react'
import { Link } from 'react-router-dom'

// import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../states/useFetch'
import BlogList from './BlogList'
import '../styles/aside.css'
import Form from './Form'
import Categories from './Categories'
import MostEngaged from './MostEngaged'
import Footer from './Footer'
export default function Aside () {
  const { data: blogs, error, isFetching } = useFetch(
    'http://localhost:5000/posts/'
  )
  const { data: users, Error, IsFetching } = useFetch(
    'http://localhost:5000/users/'
  )
  return (
    <div className='side-blog'>
      {error && <div> {error} </div>}
      {isFetching && <div> Loading... </div>}
      {blogs && (
        <div className='side-blog'>
          <h3>{'Most Engaged'}</h3>
<MostEngaged />
          <h3>{'Categories'}</h3>
<Categories category={'Art'}/>
<Categories category={'Science And Tech'}/>
<Categories category={'Music'}/>
<Categories category={'Entertainment'}/>
<Categories category={'Food'}/>
<Categories category={'Economy'}/>
<Categories category={'Religion'}/>
<Categories category={'Culture'}/>
        </div>
      )}
      <Form />
<Footer />
    </div>
  )
}
/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../states/useFetch'
import BlogList from '../bloglist/BlogList'
import './aside.css'
import Form from '../form/Form'
import Categories from '../categories/Categories'
import MostEngaged from '../popular/MostEngaged'
import Footer from '../sidefooter/SideFooter'
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
        <>
          <h3>{'Most Engaged'}</h3>
<MostEngaged />
          <h3>{'Categories'}</h3>
<Categories category={'Art'}/>
<Categories category={'Science-and-Tech'}/>
<Categories category={'Music'}/>
<Categories category={'Entertainment'}/>
<Categories category={'Food'}/>
<Categories category={'Economy'}/>
<Categories category={'Religion'}/>
<Categories category={'Culture'}/>
        </>
      )}
      <Form />
<Footer />
    </div>
  )
}
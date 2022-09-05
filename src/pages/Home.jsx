/** @format */
import useFetch from '../states/useFetch'
import BlogList from '../components/BlogList'
import { Link } from 'react-router-dom'
import Aside from '../components/Aside'
import '../styles/home.css'
import { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'
import MainFooter from '../components/MainFooter'

export const Home = ({ searchFor }) => {
  const { data: blogs, isFetching, error } = useFetch(
    'http://localhost:5000/posts'
  )
  const [page, setPage] = useState(1)
  const [len, setLen] = useState(5)

  useEffect(() => {
    blogs && setLen(Math.round(blogs.length / 5))
  }, [blogs])

  const filterIt = (terms, arr) => {
    return arr.filter(obj => {
      let val = terms.replace(/\s/g, '')
      let search = obj.title.replace(/\s/g, '')
      console.log(val, search)
      return obj ? search.includes(val) : obj
    })
  }

  return (
    <>
      <div id='home'>

     <div className='posts'>
        <Pagination
  pages={len}
  pagination={page}
  Func={e => {
    setPage(e)
  }}
/>
  {error && <div> {error} </div>}
{isFetching && <div> Loading... </div>}
  {blogs &&
            (!searchFor ? (
              <BlogList
                blogs={blogs}
                pagination={page}
                title='Blog Posts'
/>
            ) : (
              <BlogList
                blogs={filterIt(searchFor, blogs)}
                pagination={page}
                title={'Result of posts : ' + searchFor}
              />
            ))}

          <Pagination
            pages={len}
            pagination={page}
            Func={e => {
              setPage(e)
            }}
          />
        </div>
        <div>
          <Aside />
        </div>
      </div>
      <MainFooter />
    </>
  )
}

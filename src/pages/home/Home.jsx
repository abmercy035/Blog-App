/** @format */
import React, { useEffect, useState } from 'react'
import './home.css'
import { Link, useSearchParams } from 'react-router-dom'
import useFetch from '../../states/useFetch'
import Aside from "../../components/aside/Aside"
import BlogList from '../../components/bloglist/BlogList'
import AddPost from '../../components/addpost/AddPost'
import Pagination from '../../components/pagination/Pagination'
import SearchBar from '../../components/searchbar/SearchBar'
import Header from '../../components/header/Header'

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams(),
  [cate, setCate] = useState(searchParams.get("categories"));
 
  useEffect(() => {
    setCate(searchParams.get("categories"))
  })
  
  const [searchFor, setSearchFor] = useState(""),

  handleSearch = (e) => {
    setSearchFor(e.target.value);
  };
  
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
  
  const cat = (terms, arr) => {
   return arr.filter(obj => {
    let val = terms;
    let search = obj.category
    console.log(val, search)
    return obj ? search === val : obj
  })
  }

  return (
    <>
     <Header />
      <div id='home'>
       <SearchBar handleInput={handleSearch} />
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
            (!searchFor ? 
              (
          !cate ? 
          <BlogList
                blogs={blogs}
                pagination={page}
                title='Blog Posts'
/>: (
  <BlogList
    blogs={cat(searchParams.get("categories"), blogs)}
    pagination={page}
    title={"Category: " + searchParams.get("categories")}
  />
)
) : !cate ? 
<BlogList
      blogs={blogs}
      pagination={page}
      title='Blog Posts'
/> : (
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
         {blogs && <Aside />}
        </div>
      </div>
      <AddPost />
    </>
    // https://github.com/abmercy035/Blog-App
  )
}

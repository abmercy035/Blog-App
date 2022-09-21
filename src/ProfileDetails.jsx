import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Img from "./components/img/Img";
import postMenu from "./img/post-menu.png";
import useFetch from "./states/useFetch";
// import FetchUsers from "../fetchusers/FetchUsers";
export default function ProfileDetails({ user }) {
  const {
    data: posts,
    error: postErr,
    isFetching: postFetching,
  } = useFetch("http://localhost:5000/posts/");

  const navigate = useNavigate();
  return (
    <div className="profile-popular">
      {posts &&
        posts
          ?.filter((blog, index) => {
            if (blog.userId === user) return blog;
          })
          .map((blogPost, index) => {
            if (blogPost?.comments.length > 0) {
              return (
                <div key={index} className="popular-posts">
                  <div className="post-details-left">
                   <Img
                      src={
                        blogPost.img +
                        "f0" +
                        Number(Math.floor(Math.random() * 1080)) +
                        "/" +
                        "0f" +
                        Number(Math.floor(Math.random() * 9080)) +
                        "/?text=" +
                        blogPost.title.slice(0, 5)
                      }
                    />
                  </div>

                  <div className="post-details-center">
                    <span className="top">
                      <h4 className="title">
                      <Link to={`/posts/${blogPost.id}`}>
                        {blogPost.title}
                </Link>
                        </h4>
                    </span>
                    <div className="foot">
                      <span className="category">
                      <Link to={`/posts/?categories=${blogPost.category}`}>
                   {blogPost.category}
                </Link>
                        </span>
                      <span className="time">{blogPost.time}</span>
                    </div>
                  </div>
                  <div className="post-details-right">
                    <Img
                      src={
                       postMenu
                      }
                    />
                  </div>
                </div>
              );
            }
          })}
    </div>
  );
}

// {blogs?.map((blogPost, index) => {
//   if (blogPost?.comments.length > 3) {
//     return (
//       <div data-aos="flip-down" key={index} className='mg-preview'>
//         <Link to={`/posts/${blogPost.id}`}>
//           {blogPost?.title}
//         </Link>
//         {users?.map(user => {
//           if (user?.userId === blogPost?.userId) {
//             return (
//               <span key={index}>
//                 <img
//                   src={
//                     user.avatar + Number(Math.floor(Math.random() * 10))
//                   }
//                   alt={'profile'}
//                 />
//                 <Link to={`/posts/${user.id}`}>
//                   {user.username}
//                 </Link>
//               </span>
//             )
//           }
//         })}
//       </div>
//     )
//   }
// })}

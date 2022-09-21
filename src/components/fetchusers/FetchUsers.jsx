import React from "react";
import {Link} from "react-router-dom"
import useFetch from "../../states/useFetch";

export default function FetchUsers({ from }){

 const {data : users} = useFetch("http://localhost:5000/users");

  return (
    <>
      {users?.map((user, index) => {
        if (user?.userId === from?.userId) {
          return (
            <span key={index} className="user">
              <img
                src={user.avatar + "f0" +Number(Math.floor(Math.random() * 1080)) + "/" + "0f" +Number(Math.floor(Math.random() * 9080))  + "/?text=" + user.username.slice(0,1)}

              className="post-avatar" />
              <Link to={`/profile/${user.id}`}>Post by {user.username}</Link>
            </span>
          );
        }
      })}
    </>
  );
}

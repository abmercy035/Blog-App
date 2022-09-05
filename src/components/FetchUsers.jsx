import React from "react";
import {Link} from "react-router-dom"
import useFetch from "../states/useFetch";

export default function FetchUsers({ from }){

 const {data : users} = useFetch("http://localhost:5000/users");

  return (
    <>
      {users?.map((user, index) => {
        if (user?.userId === from?.userId) {
          return (
            <span key={index} className="user">
              <img
                src={user.avatar + Number(Math.floor(Math.random() * 10))}
                alt={"profile"}
              />
              <Link to={`/posts/${user.id}`}>Post by {user.username}</Link>
            </span>
          );
        }
      })}
    </>
  );
}

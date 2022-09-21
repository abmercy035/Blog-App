import React from "react";
import { Link } from "react-router-dom";

export default function AddPost() {
  return (
    <>
      <section>
        <Link className="createPost" to="/create">
          <div> + </div>
        </Link>
      </section>
    </>
  );
}

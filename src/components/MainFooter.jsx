import React from "react";
import { Link } from "react-router-dom";

export default function MainFooter() {
  return (
    <>
      <section>
        <Link to="/create">
          <div></div>
        </Link>
      <div id="copyright">Javascript Enthusiast &copy;2022</div>
      </section>
    </>
  );
}

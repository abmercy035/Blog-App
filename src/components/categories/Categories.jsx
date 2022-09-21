import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../states/useFetch";
import "./categories.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Categories({ category }) {
  const {
    data: blogs,
    error,
    isFetching,
  } = useFetch("http://localhost:5000/posts/");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="blog-categories">
      {blogs
        ?.filter((blogComments, index) => {
          if (blogComments?.category === category) return blogComments;
        })
        .map((blogComments, index) => {
          if (index < 1) {
            return (
              <div
                data-aos="flip-up"
                key={index}
                className="categories-samples"
              >
                <Link to={`/posts/${blogComments.id}`}>
                  {blogComments?.title}
                </Link>
                <Link
                  to={`/posts/?categories=${blogComments.category}`}
                  className="cat-link"
                >
                  More Post On {blogComments?.category}
                </Link>
              </div>
            );
          }
        })}
      {/* ) */}
    </div>
  );
}

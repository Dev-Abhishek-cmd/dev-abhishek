import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog }, key) {
  return (
    <div key={"Blog"+key}>
      <div class="container">
        <div class="square">
          <img src={blog.image} alt="blog" className="blog-card-image mask" />
          <div class="blog-card-title">{blog.title}</div>
          <p className="blog-card-subtitle">{blog.description}</p>

          <div>
            <a href={blog.url} target="_" class="button">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "../styles/css/homePage.css";
import "../styles/css/variousCards.css";
import { BlogCard } from "../models/MainCard.jsx";

import blogPic1 from "../assets/images/blog-img-01.jpg";
import blogPic2 from "../assets/images/blog-img-02.jpg";
import blogPic3 from "../assets/images/blog-img-03.jpg";

function Blog() {
  const blogPosts = [
    new BlogCard(
      "blog1",
      blogPic1,
      "Title of the post",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum ipsum fugiat. Quod aperiam iusto totam quia voluptatem quam corrupti eius explicabo quis vel blanditiis a ad, unde aliquid aspernatur."
    ),
    new BlogCard(
      "blog2",
      blogPic2,
      "Title of the post",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum ipsum fugiat. Quod aperiam iusto totam quia voluptatem quam corrupti eius explicabo quis vel blanditiis a ad, unde aliquid aspernatur."
    ),
    new BlogCard(
      "blog3",
      blogPic3,
      "Title of the post",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum ipsum fugiat. Quod aperiam iusto totam quia voluptatem quam corrupti eius explicabo quis vel blanditiis a ad, unde aliquid aspernatur."
    ),
  ];
  return (
    <section className="blog">
      <h1>latest blog</h1>
      <div className="blogcontainer">
        {blogPosts.map(blogPost => (
          <React.Fragment key={blogPost.id}>{blogPost.render()}</React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Blog;

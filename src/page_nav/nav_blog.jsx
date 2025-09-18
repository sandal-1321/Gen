import React from 'react'
import Blog from '../pages/blog.jsx'
import '../static/nav-blog.css'
import Blogpost from "../file/blog.js"

const nav_blog = () => {


     return (
    <div className="blog-container-nav">
      <h2 className="blog-title-nav">Our Blog</h2>
      <p className="blog-subtitle-nav">Project updates and insights from our team.</p>

      <div className="blog-grid-nav">
        {Blogpost.map((post) => (
          <div key={post.id} className="blog-card-nav">
            <img src={post.img} alt={post.title} width={350} height={200} className="blog-image-nav" />
            <div className="blog-content-nav">
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default nav_blog

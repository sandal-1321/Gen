import React, { useEffect, useState } from 'react'
import '../static/nav-blog.css'
import Service from '../file/servic_data.js';
import Blogpost from '../file/blog.js';
import { useNavigate } from 'react-router-dom';

const nav_blog = () => {

  const navigate = useNavigate();

  const [service, setService] = useState("");
  const [pathes, setPathes] = useState("");

  let serv = Service.map((e) => {
    return e.id;
  })
  useEffect(() => {
    setService(serv);
  }, []);

  const handlenav = (id) => {
    const path = service.includes(id) ? `/services#` : `/blog#$`;
    const hash = service.includes(id) ? id : id;
    setPathes(hash);
    navigate(path);
  }

  return (
    <div className="blog-container-nav">
      <h2 className="blog-title-nav">Our Blog</h2>
      <p className="blog-subtitle-nav">Project updates and insights from our team.</p>

      <div className="blog-grid-nav">
        {Blogpost.map((post) => (
          <div id={post.id} key={post.id} className="blog-card-nav">
            <img src={post.img} alt={post.title} width={350} height={200} className="blog-image-nav" />
            <div className="blog-content-nav">
              <h3>
                <a href={`#${pathes}`} onClick={(e) => { handlenav(post.id); }}>{post.title}</a>
              </h3>
              <p>{post.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




export default nav_blog


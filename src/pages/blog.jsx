import React from 'react'
import "../static/blog.css"
import blogImg from '../image/ecom.gif'
import { Link } from 'react-router-dom'

const blog = () => {
    return (
        <div className="blog-container">
            <div className='blog-sec-1'>
                <div className='blog-sec-2'>
                    <h1 className="blog-title">Our Blog</h1>
                    <p>Project updates and insights from our team.</p>
                </div>
                <div className='blog-sec-3'>
                    <div className='blog-post'>
                        <h2 className='blog-post-title'>🚀 E-Commerce Project</h2>
                        <p className='blog-post-content'>At GenBug, we recently worked on building a scalable and high-performance E-Commerce platform designed to enhance the online shopping experience. The project’s main goal was to create a user-friendly, secure, and feature-rich 
                            application that meets both business needs and customer expectations.</p>
                        <p className='blog-post-content'>We're excited to announce the launch of our new e-commerce platform!
                             This project showcases our expertise in building scalable and secure online stores. Check it out and let us know what you think!</p>
                        <p></p>
                        <Link to="/blog" className='blog-post-link'>Read More</Link>
                    </div>
                    <div className='blog-img'>
                        <img src={blogImg} alt="Blog" width={450} height={350} className='blog-im'/>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default blog

import React from 'react'
import Body_nave from '../component/body_nave.jsx'
import Body_navess from '../component/body_navess.jsx'
import Body from "../pages/home.jsx"
import About from '../pages/about.jsx'
import Look from '../component/look.jsx'
import Aboutus from '../pages/aboutus.jsx'
import Service from '../pages/service.jsx'
import Blog from '../pages/blog.jsx'
import Contact from '../pages/contact.jsx'
import Footer from '../pages/footer.jsx'

const nav_about = () => {
  return (
    <>
    <main>
      <header>
        <div className='nav-normal'>
          <Body_nave />
        </div>
        <div className='nav-sticky'>
          <Body_navess />
        </div>
        <div>
          <Body />
        </div>
        <div>
          <About />
        </div>
        <div>
           <Look/>
           <Aboutus />
           <Service />
           <Blog />
           <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </header>
    </main>
    </>
  )
}

export default nav_about

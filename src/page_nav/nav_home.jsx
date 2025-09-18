
import Body from "../pages/home.jsx"
import About from '../pages/about.jsx'
import Look from '../component/look.jsx'
import Aboutus from '../pages/aboutus.jsx'
import Service from '../pages/service.jsx'
import Blog from '../pages/blog.jsx'
import Contact from '../pages/contact.jsx'

const nav_home = () => {
  return (
    <>
    <main>
      <header>
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
      </header>
    </main>
    </>
  )
}

export default nav_home

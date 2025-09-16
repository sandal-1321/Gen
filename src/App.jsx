import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Nav_home from './page_nav/nav_home.jsx'
import Nav_service from './page_nav/nav_service.jsx'
import Nav_contact from './page_nav/nav_contact.jsx'
import Nav_abouts from './page_nav/nav_abouts.jsx'
import Nave from './component/body_nave.jsx'
import Navess from './component/body_navess.jsx'
import Footer from './pages/footer.jsx'


function App() {

  return (
    <>
      <div><Nave /></div>
      <div className='nav-sticky'><Navess /></div>
      <div>
        <Routes>
          <Route path="/" element={<Nav_home />} />
          <Route path="/about" element={<Nav_abouts />} />
          <Route path="/services" element={<Nav_service />} />
          <Route path="/contact" element={<Nav_contact />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>

    </>
  )
}

export default App

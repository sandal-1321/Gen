import './App.css'
import {Route , Router , Routes} from 'react-router-dom'
import Nav_home from './page_nav/nav_home.jsx'
import Nav_service from './page_nav/nav_service.jsx'
import Nav_contact from './page_nav/nav_contact.jsx'
import Nav_abouts from './page_nav/nav_abouts.jsx'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Nav_home />} />
        <Route path="/about" element={<Nav_abouts />} />
        <Route path="/services" element={<Nav_service />} />
        <Route path="/contact" element={<Nav_contact />} />
      </Routes>
    </>
  )
}

export default App

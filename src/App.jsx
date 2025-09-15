import './App.css'
import Body_nave from './component/body_nave.jsx'
import Body_navess from './component/body_navess.jsx'
import Body from "./pages/home.jsx"
import About from './pages/about.jsx'
import Look from './component/look.jsx'
import Aboutus from './pages/aboutus.jsx'
import Service from './pages/service.jsx'


function App() {

  return (
    <>
    <main>
      <header>
        <div>
          <Body_nave />
        </div>
        <div>
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
        </div>
      </header>
    </main>
    </>
  )
}

export default App

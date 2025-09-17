
import "../static/home.css"
import Left from "../component/body_sec_lef.jsx"
import Rigt from "../component/body_sec_rig.jsx"

const home = () => {
  return (
    <div className='home-sec'>
      <div className='home-sec-lef'><Left /></div>
      <div className='home-sec-rig'><Rigt /></div>
    </div>
  )
}

export default home

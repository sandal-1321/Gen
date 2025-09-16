import React from 'react'
import "../static/body_navess.css"
import gen from '../image/gen.png'
import { Link } from 'react-router-dom'

const body_navess = () => {
  return (
    <div className='nav-main-2'>
        <div className='nav-sector'>
          <div className='nav-title'>
             <a href='#'><img src={gen} width="120px" height="45px"/></a>
          </div>
          <div className='nav-lis'>
              <ul>
                <li> <Link to='/'> Home </Link></li>
                <li> <Link to='/about'> About </Link></li>
                <li> <Link to='/services'> Our Services </Link></li>
                <li> <Link to='/blog'> Blog </Link></li>
                <li> <Link to='/contact'> Contact Us </Link></li>
              </ul>
          </div>
        </div>
    </div>
  )
}

export default body_navess

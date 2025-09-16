import React from 'react'
import "../static/body_navess.css"
import gen from '../image/gen.png'

const body_navess = () => {
  return (
    <div>
        <div className='nav-sector'>
          <div className='nav-title'>
             <a href='#'><img src={gen} width="120px" height="45px"/></a>
          </div>
          <div className='nav-lis'>
              <ul>
                <li> <a href='#'> Home </a></li>
                <li> <a href='#'> About </a></li>
                <li> <a href='#'> Our Services </a></li>
                <li> <a href='#'> Blog </a></li>
                <li> <a href='#'> Contact Us </a></li>
              </ul>
          </div>
        </div>
    </div>
  )
}

export default body_navess

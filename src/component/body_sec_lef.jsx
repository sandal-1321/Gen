import React from 'react'
import "../static/body_sec_lef.css"
import { Link } from 'react-router-dom'

const body_sec_lef = () => {
    return (
        <div className='lef-main'>
            <div className='sec-lef'>
                <div className='lef-1'>
                    <div><h3>Great <span>Product</span> is<br /> built by great <span>teams</span></h3></div>
                    <div><p>We help build and manage a team of world-class <br /> developers to bring your vision to life Let’s get started!</p></div>
                </div>
                <div className='lef-2'>
                    <button><Link to="/contact" > Contact Us <span><i class="fa-solid fa-arrow-right"></i></span></Link></button>
                </div>
            </div>
        </div>
    )
}

export default body_sec_lef

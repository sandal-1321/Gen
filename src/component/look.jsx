import React from 'react'
import "../static/look.css"
import img1 from '../image/pos1.jpg'
import img2 from '../image/pos2.jpg'
import img3 from '../image/pos3.jpg'
import img4 from '../image/pos4.png'
import img5 from '../image/ayro.svg'
import img6 from '../image/deck.svg'
import img7 from '../image/line.svg'
import img8 from '../image/plain.svg'
import img9 from '../image/tail.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const look = () => {

  var settings = {
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 200,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='look-main'>

      <div className='look-1' >
        <div className='look-2'>
          <h2>We are ready to help</h2>
          <p>We are ready to help you transform your ideas into innovative,
            secure, and scalable software solutions, providing full support from development and design to deployment and ongoing updates, ensuring your business achieves growth
            , efficiency, and lasting success in a rapidly evolving digital world.</p>
        </div>
        <div className='look-3'>
          <Slider {...settings} className='look-4'>
            <div>
              <img src={img1} width="100%" height="440px" />
            </div>
            <div>
              <img src={img2} width="100%" height="440px" />
            </div>
            <div>
              <img src={img3} width="100%" height="440px" />
            </div>
            <div>
              <img src={img4} width="100%" height="440px" />
            </div>
          </Slider>
        </div>
        <div className='look-7'>
          <div className='look-5'>
           <div className='look-6'>
            <img src={img5} />
           </div>
           <div className='look-6'>
            <img src={img6} />
           </div>
           <div className='look-6'>
            <img src={img7} />
           </div>
           <div className='look-6'>
            <img src={img8} />
           </div>
           <div className='look-6'>
            <img src={img9} />
           </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default look

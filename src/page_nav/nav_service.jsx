import React from 'react'
import '../static/nav_service.css'
import Servic_data from '../file/servic_data.js'
import data from "../file/data.json"

const nav_service = () => {


  return (
    <div className='service_main'>
      <div className='service_title'>
        <h1>Our Services</h1>
        <p>Explore the range of services we offer to help you achieve your goals.</p>
      </div>
      <div className='service_body'>
        <div className='service_body1'>
          <div className="nav_service">
            {Servic_data.map((service) => (
              <div key={service.id} className="service_item" id={`${service.id}`}>
                <div className={`nav-ser-box-img`} >
                  <img src={service.img} width="260px" height="240px" alt={service.titl} />
                </div>
                <h3>{service.titl}</h3>
                <p>{service.des}</p>
              </div>
            ))}
          </div>
          <div className='nav-service-contain'>
            {data.map((val) => {
              return (
                <div className='ser-con-1'>
                  <div className='ser-con-2'><i class={val.ic}></i></div>
                  <h3>{val.titl}</h3>
                  <p>{val.des}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>

  )
}

export default nav_service

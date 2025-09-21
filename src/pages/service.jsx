import React from 'react'
import "../static/service.css"
import data from "../file/data.json"

const service = () => {
    return (
        <div className='main-service'>
            <div className='service-0'>
                <div className='service-titl'>
                    <h1>Our Services</h1>
                </div>
                <div className='service-contain'>
                    {data.map((val) => {
                        return (
                            <div className='ser-con-1' id={val.id} key={val.id}>
                                <div className='ser-con-2'><i class={val.ic}></i></div>
                                <h3>{val.titl}</h3>
                                <p>{val.des}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default service

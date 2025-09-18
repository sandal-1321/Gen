import "../static/aboutus.css"
import side from '../image/side2.gif'
import { Link } from "react-router-dom"

const aboutus = () => {
    return (
        <div className="main-aboutus">
            <div className="aboutus-sec">
                <div className="aboutus-sec-0">
                    <h1>About Us - <span>GenBug</span></h1>
                </div>
                <div className="aboutus-block">
                    <div className="aboutus-sec-1">
                        <h2>Turning Ideas Into Digital Reality</h2>
                        <p>At GenBug, we are passionate about creating innovative software solutions that help
                            businesses thrive in the digital era
                            . Our goal is simple — to turn ideas into reality with technology that is fast, reliable, and user-friendly.
                            We believe technology should simplify lives and accelerate growth,
                            not complicate it. That’s why we focus on delivering solutions that are easy to use, scalable,
                            and tailored to meet the unique needs of every client.</p>
                            <div className="btn"><Link to="/about"><button>About Us <span><i class="fa-solid fa-arrow-right"></i></span></button></Link></div>
                    </div>
                    <div className="aboutus-sec-2">
                        <img src={side} width={"500px"} height={"300px"} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default aboutus

import '../static/footer.css'
import logo from '../image/gen.png'
import { Link } from 'react-router-dom'
const footer = () => {
  return (
    <div className="footer">
        <div className="footer-content">
            <div className='footer-left'>
                <div className='footer-logo'><Link to="/"><img src={logo} width={"100px"} height={"50px"} alt="Logo" /></Link></div>
                <div className='footer-description'>
                    <p>Email : <span>GenBug@in.com</span></p>
                    <p>Phone : <span>+123 456 7890</span></p>
                    <div className='footer-icons'>
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className='footer-center'>
                <div className='footer-title'><p>Quick Links</p></div>
                <ul className='footer-links'>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className='footer-right'>
                <div className='footer-title'><p>Products</p></div>
                <div className='footer-socials'>
                    <a href="#">Invoice</a>
                    <a href="#">Contract</a>
                    <a href="#">Accounting</a>
                    <a href="#">Management</a>
                </div>
            </div>
        </div>
        <div className='footer-bottom'>
            <p>Copyright © 2024 All rights reserved | This template is made by GenBug</p>
        </div>
    </div>
  )
}

export default footer

import '../static/footer.css'
import logo from '../image/gen.png'
const footer = () => {
  return (
    <div className="footer">
        <div className="footer-content">
            <div className='footer-left'>
                <div className='footer-logo'><a href="#"><img src={logo} width={"100px"} height={"50px"} alt="Logo" /></a></div>
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
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
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

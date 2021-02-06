import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className="footer__left">
                <img src="images/logo.png" alt=""/>
                <p className="terms">Terms and Policies</p>
                <p className="copyright">iKarely &copy; 2021</p>
            </div>
            <div className="footer__middle">
                <ul>
                    <li>Blog</li>
                    <li>Contact us</li>
                    <li>About Us</li>
                    <li>FAQs</li>
                    <li>partners</li>
                </ul>
            </div>

            <div className="footer__right">
                <div className="subscribe__form">
                    <h3 className='subscribe___header'>Subscribe to Newsletter</h3>
                    <input type="text" placeholder='Your Email'/>
                    <button className="footer__btn">Subscribe</button>
                </div>
              
            </div>
        </div>
    )
}

export default Footer

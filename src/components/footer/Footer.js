import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="footer-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="content">
                <div className="logo">
                  <h1 style={{color: "white" }}>ServoInSolutions</h1>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, mattetur adipiscing elit, sed do eiusmod.
                </p>
                <div className="subscribe">
                  <h4>Join Newsletter</h4>
                  <form className="newsletter-form" data-toggle="validator">
                    <input type="email" id="emails" className="form-control" placeholder="Your Email"
                      name="EMAIL" />
                      <button className="box-btn" type="submit">
                        Subscribe
                      </button>
                      <div id="validator-newsletter" className="form-result"></div>
                  </form>
                </div>
                <ul className="social">
                  <li>
                    <Link to="/"><i className='bx bxl-facebook'></i></Link>
                  </li>
                  <li>
                    <Link to="/"><i className='bx bxl-twitter'></i></Link>
                  </li>
                  <li>
                    <Link to="/"><i className='bx bxl-instagram'></i></Link>
                  </li>
                  <li>
                    <Link to="/"><i className='bx bxl-pinterest'></i></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="content ml-15">
                <h3>Our Service</h3>
                <ul className="footer-list">
                  <li><Link to="/">Visual Design</Link></li>
                  <li><Link to="/"> Development</Link></li>
                  <li><Link to="/">QA & Testing</Link></li>
                  <li><Link to="/">IT Management</Link></li>
                  <li><Link to="/">Cyber Security</Link></li>
                  <li><Link to="/">Wireless Connection</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="content">
                <h3>Quick Links</h3>
                <ul className="footer-list">
                  <li><Link to="/">FAQ</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/">Privacy & Policy</Link></li>
                  <li><Link to="/">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="content contacts">
                <h3 className="ml-40">Contact</h3>
                <ul className="footer-list foot-social">
                  <li><a href="tel:+919868476879"><i className="bx bx-mobile-alt"></i> +91 9868476879</a></li>
                  <li><a href="tel:+919289566794"><i className="bx bx-phone"></i> +91 9289566794</a></li>
                  <li><i
                      className="bx bxs-envelope"></i> <span className="__cf_email__"
                        data-cfemail="b9d1dcd5d5d6f9c9d8cad697dad6d4">info@servoinsolutions.com</span>
                  </li>
                  
                  <li><i className="bx bxs-map"></i> S-85 A, 3RD FLOOR ,PANDAV NAGAR 
                  OPP - MOTHER DAIRY, DELHI 110092
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ul className="menu">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/solutions">Solutions</Link></li>
                  <li><Link to="/services">Our Services</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <p className="right">
                  Copyright @2022 ServoInSolutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>


      <div className="go-top">
        <i className='bx bx-chevrons-up'></i>
        <i className='bx bx-chevrons-up'></i>
      </div>
    </div>
  )
}

export default Footer
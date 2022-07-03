import React from 'react';
import ContactForm from '../../components/contact/ContactForm';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Navigation from '../../components/header/Navigation';
import TitleHeader from '../../components/header/TitleHeader';


const Contact = () => {
  return (
    <div>
        <Header />
        <Navigation />
        <TitleHeader />
        <section className="contact-area pt-100 pb-70">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <div className="single-contact">
                        <div className="icon">
                            <i className='bx bx-time'></i>
                        </div>
                        <div className="content">
                            <h3>Opening Hours</h3>
                            <p>Sun - Thu : 10:00 AM - 06:00 PM</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single-contact">
                        <div className="icon">
                            <i className='bx bx-location-plus'></i>
                        </div>
                        <div className="content">
                            <h3>Address</h3>
                            <p>S-85 A, 3RD FLOOR ,PANDAV NAGAR OPP - MOTHER DAIRY, DELHI 110092</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="single-contact">
                        <div className="icon">
                            <i className='bx bx-phone-call'></i>
                        </div>
                        <div className="content">
                            <h3>Phone</h3>
                            <p>+91 9868476879</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <ContactForm />
    <Footer />
    </div>
  )
}

export default Contact
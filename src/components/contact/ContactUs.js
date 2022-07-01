import React from 'react'

const ContactUs = () => {
  return (
    <section className="home-contact-area bg-color ptb-100">
        <div className="container">
            <div className="section-title">
                <span>Contact Us</span>
                <h2>Let Us Know About Your Project Idea!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque
                    blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.</p>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <div className="contact-img">
                        <img src="assets/images/contact-img.png" alt="contact" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="content">
                        <form id="contactForm">
                            <div className="row">
                                <div className="col-lg-12 col-sm-12">
                                    <div className="form-group">
                                        <input type="text" name="name" id="name" className="form-control" 
                                            data-error="Please enter your name" placeholder="Your Name" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-12">
                                    <div className="form-group">
                                        <input type="email" name="email" id="email" className="form-control" 
                                            data-error="Please enter your email" placeholder="Your Email" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-12">
                                    <div className="form-group">
                                        <input type="text" name="phone_number" id="phone_number" 
                                            data-error="Please enter your number" className="form-control"
                                            placeholder="Your Phone" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-12">
                                    <div className="form-group">
                                        <input type="text" name="msg_subject" id="msg_subject" className="form-control"
                                            data-error="Please enter your subject" placeholder="Subject" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea name="message" className="form-control" id="message" cols="30" rows="5"
                                            data-error="Write your message"
                                            placeholder="Your Message"></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <button type="submit" className="default-btn page-btn box-btn">
                                        Submit
                                    </button>
                                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default ContactUs
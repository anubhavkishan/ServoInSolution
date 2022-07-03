import React from 'react';
import {Link} from 'react-router-dom';

const Features = () => {
  return (
    <section className="feature-area ptb-100">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="contnet">
                        <div className="feature-tittle">
                            <span>Features</span>
                            <h2>We Have Also Some Features That Provided by Paso</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consectetur, beatae
                                quod eaque reprehenderit non ab quibusdam doloribus voluptatibus! Voluptatum aspernatur
                                quasi id dolore doloremque quo vero</p>
                        </div>
                        <ul>
                            <li>
                                <i className="flaticon-correct"></i>
                                Freelancing Traning Course
                            </li>
                            <li>
                                <i className="flaticon-correct"></i>
                                Technological Consultation
                            </li>
                            <li>
                                <i className="flaticon-correct"></i>
                                Monthly Paid Workspace
                            </li>
                            <li>
                                <i className="flaticon-correct"></i>
                                IT Learning Institute
                            </li>
                            <li>
                                <i className="flaticon-correct"></i>
                                Digital Marketing
                            </li>
                        </ul>
                        <Link to="/contact" className="box-btn">Lets Talk!</Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="feature-img">
                        <img src="assets/images/feature-img.png" alt="feature" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features
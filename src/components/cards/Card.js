import React from 'react';
import Data from '../../data/data.json';
import {Link} from 'react-router-dom'


const ServiceCard = () => {
    const [cards] = Data;
    return (
        <section className="home-service-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Smart Services</span>
                    <h2>We Provide All Kind of Tech Solutions</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Quis ipsum suspendisse.</p>
                </div>
                <div className="row">
                    {cards.cards.map((card) => {
                        return (
                            <div className="col-lg-4 col-sm-6" key={card.id}>
                                <div className="single-service">
                                    <div className="service-img">
                                        <img src={card.image} alt="service" />
                                    </div>
                                    <div className="service-content">
                                        <h3>{card.heading}</h3>
                                        <p>{card.paragraph}</p>
                                        <Link to="/" className="line-bnt">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )

                    })}
                </div>
            </div>
        </section>
    )
}

export default ServiceCard
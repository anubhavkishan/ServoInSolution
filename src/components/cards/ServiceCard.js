import React from 'react';
import Data from "../../data/data.json";
import { Link } from "react-router-dom";

const ServiceCard = () => {
    const [, , serviceCards] = Data;
    return (
        <div className="row case-list">

            {serviceCards.serviceCards.map((serviceCard) => {
                return (
                    <div className="col-lg-4 col-sm-6 item cyber" key={serviceCard.id}>
                        <div className="single-case">
                            <div className="case-img">
                                <Link to="/">
                                    <img src={serviceCard.image} alt="case" />
                                </Link>
                            </div>
                            <div className="content">
                                <Link to="/">
                                    <h3>{serviceCard.serviceName}</h3>
                                </Link>
                                <p>{serviceCard.details}</p>
                                <Link to="/" className="line-bnt">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>


    )
}

export default ServiceCard
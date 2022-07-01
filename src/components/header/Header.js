import React from 'react';
import {Link} from "react-router-dom"

const header = () => {
    return (
        
        <header className="header-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-sm-0">
                        <div className="logo">
                            <h1>ServoInSolutions</h1>
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-8 text-right pr-0">
                        <div className="header-content-right">
                            <ul className="header-contact">
                                <li><i className="bx bxs-phone-call"></i> +91 123 456 789</li>
                                <li><i
                                        className="bx bxs-envelope"></i> <span className="__cf_email__"
                                            data-cfemail="09616c6565664979687a66276a6664">info@servoinsolutions.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 text-right pl-0">
                        <div className="header-content-right">
                            <ul className="header-social">
                                <li>
                                    <Link to="/"><i className="bx bxl-facebook"></i></Link>
                                </li>
                                <li>
                                    <Link to="/"><i className="bx bxl-twitter"></i></Link>
                                </li>
                                <li>
                                    <Link to="/"> <i className="bx bxs-envelope"></i></Link>
                                </li>
                                <li>
                                    <Link to="/"> <i className="bx bxl-youtube"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default header
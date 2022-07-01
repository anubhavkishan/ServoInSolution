import React from 'react';
import {Link} from "react-router-dom"


const Navigation = () => {
    return (
        <div className="navbar-area">
            <div className="mobile-nav">
                <Link to="/" className="logo">
                    <h1>ServoInSolutions</h1>
                </Link>
            </div>
            <div className="main-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav text-left">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link d active">Home</Link>

                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link ">Solutions</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link ">Our Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Contact </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link ">Blogs</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="nav-btn">
                            <Link to="/" className="box-btn">Get Started</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navigation
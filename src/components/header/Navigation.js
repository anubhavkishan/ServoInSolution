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
                                    <Link to="/" className="nav-link dropdown-toggle active">Home</Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link active">Home One</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Home Two</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Home Three</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link dropdown-toggle">Solutions</Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Solutions</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Solutions Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link dropdown-toggle">Case Studies</Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Case Studies</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Case Studies Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link dropdown-toggle">Blog</Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Blog</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Blog Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link dropdown-toggle">Pages</Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Team</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Pricing</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Gallery</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Testimonials</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Sign Up</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Sign In</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Error 404</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">FAQ</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Terms & Conditions</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Privacy Policy</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Contact </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-right">
                            <form>
                                <div className="input-group">
                                    <input type="text" className="form-control search" placeholder="Search..." />
                                </div>
                                <button type="submit">
                                    <i className="bx bx-search"></i>
                                </button>
                            </form>
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
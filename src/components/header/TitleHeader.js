import React from 'react';
import {Link} from "react-router-dom";

const TitleHeader = () => {
  return (
    <div className="page-title-area">
        <div className="container">
            <div className="page-title-content">
                <h2>About</h2>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="active">About</li>
                </ul>
            </div>
        </div>
        <div className="page-shape">
            <div className="shape1">
                <img src="assets/images/shape/1.png" alt="shape" />
            </div>
            <div className="shape3">
                <img src="assets/images/shape/3.png" alt="shape" />
            </div>
            <div className="shape4">
                <img src="assets/images/shape/4.png" alt="shape" />
            </div>
            <div className="shape5">
                <img src="assets/images/shape/5.png" alt="shape" />
            </div>
            <div className="shape6">
                <img src="assets/images/shape/6.png" alt="shape" />
            </div>
        </div>
    </div>
  )
}

export default TitleHeader
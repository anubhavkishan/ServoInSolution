import React from 'react';
import Navigation from "../header/Navigation"

const header = () => {
    return (
        <div >
        <header class="header-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-2 col-sm-0">
                        <div class="logo">
                            <h1>ServoInSolutions</h1>
                        </div>
                    </div>
                    <div class="col-lg-8 col-sm-8 text-right pr-0">
                        <div class="header-content-right">
                            <ul class="header-contact">
                                <li><a href="tel:+1123456789"><i class="bx bxs-phone-call"></i> +1 123 456 789</a></li>
                                <li><a
                                    href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#563e333a3a3916263725397835393b"><i
                                        class="bx bxs-envelope"></i> <span class="__cf_email__"
                                            data-cfemail="09616c6565664979687a66276a6664">[email&#160;protected]</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-4 text-right pl-0">
                        <div class="header-content-right">
                            <ul class="header-social">
                                <li>
                                    <a href="#" target="_blank"><i class="bx bxl-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#" target="_blank"><i class="bx bxl-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#" target="_blank"> <i class="bx bxs-envelope"></i></a>
                                </li>
                                <li>
                                    <a href="#" target="_blank"> <i class="bx bxl-youtube"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <Navigation />
        </div>
        
    )
}

export default header
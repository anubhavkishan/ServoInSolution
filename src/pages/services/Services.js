import React from 'react';
import ServiceCard from '../../components/cards/ServiceCard';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Navigation from '../../components/header/Navigation';
import TitleHeader from '../../components/header/TitleHeader';

const Services = () => {
    return (
        <div>
        <Header />
        <Navigation />
        <TitleHeader />
        <section className="home-case pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Case Studies</span>
                    <h2>Have a Look Our Work Showcase</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Quis ipsum suspendisse.</p>
                </div>
                
                <ServiceCard />

            </div>
        </section>
        <Footer />
        </div>

    )
}

export default Services
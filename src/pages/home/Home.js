import React from 'react';
import Header from '../../components/header/Header'
import Slider from '../../components/slider/Slider'
import Navigation from '../../components/header/Navigation';
import Footer from "../../components/footer/Footer"
import ServiceCard from '../../components/cards/ServiceCard';
import OurCompany from '../../components/ourCompany/OurCompany';
import Team from '../../components/team/Team';
import ContactUs from '../../components/contact/ContactUs';
import WorkProgress from '../../components/workProgress/WorkProgress';

const Home = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <Slider />
            <ServiceCard />
            <OurCompany />
            <WorkProgress />
            <Team />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Home
import React from 'react';
import Header from '../../components/header/Header'
import Slider from '../../components/slider/Slider'
import Navigation from '../../components/header/Navigation';
import Footer from "../../components/footer/Footer"
import ServiceCard from '../../components/cards/Card';
import OurCompany from '../../components/ourCompany/OurCompany';
import Team from '../../components/team/Team';
import ContactUs from '../../components/contact/ContactForm';
import WorkProgress from '../../components/workProgress/WorkProgress';
import ChooseServoIn from '../../components/choose-servoin/ChooseServoIn';

const Home = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <Slider />
            <ServiceCard />
            <OurCompany />
            <WorkProgress />
            <ChooseServoIn />
            <Team />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Home
import React from 'react';
import Header from '../../components/header/Header';
import Navigation from '../../components/header/Navigation';
import TitleHeader from '../../components/header/TitleHeader';
import Footer from '../../components/footer/Footer';
import OurCompany from '../../components/ourCompany/OurCompany';
import AboutContent from '../../components/about-content/AboutContent';
import Features from '../../components/features/Features';

const About = () => {
  return (
    <div>
        <Header />
        <Navigation />
        <TitleHeader />
        <OurCompany />
        <AboutContent />
        <Features />
        <Footer />
    </div>
  )
}

export default About
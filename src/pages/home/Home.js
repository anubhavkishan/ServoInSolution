import React from 'react';
import Header from '../../components/header/Header'
import Slider from '../../components/slider/Slider'
import Navigation from '../../components/header/Navigation';

const Home = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <Slider />
        </div>
    )
}

export default Home
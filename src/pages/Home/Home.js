import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import TopBanner from './TopBanner/TopBanner';
import Trainers from './Trainers/Trainer';

function Home() {
    return (
        <div>
            <Header></Header>
            <TopBanner></TopBanner>
            <Services></Services>
            <Trainers></Trainers>
            <Footer></Footer>
        </div>
    )
}

export default Home;

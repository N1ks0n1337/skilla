import React from 'react';
import Header from '../blocks/header/Header';
import SelfEmloyed from '../blocks/selfEmployed/SelfEmployed';
import Works from '../blocks/works/Works';
import Slider from '../blocks/slider/Slider';
import Business from '../blocks/business/Business';
import Hightchart from '../blocks/hightchart/Hightchart';
import Earn from '../blocks/earn/Earn';
import Office from '../blocks/office/Office';
import Finance from '../blocks/finance/Finance';
import Learn from '../blocks/learn/Learn';
import Partners from '../blocks/partners/Partners';
import Feedback from '../blocks/feedback/Feedback';
import BusinessModel from '../blocks/businessModel/BusinessModel';
import Open from '../blocks/open/Open';
import Footer from '../blocks/footer/Footer'
import Uber from '../blocks/uber/Uber';



const GreenPage = () => {
    return (
        <>
            <Header/>
            <SelfEmloyed/>
            <Uber/>
            <Works/>
            <Slider/>
            <Business/>
            <Hightchart/>
            <Earn/>
            <Finance/>
            <Learn/>
            <Partners/>
            <Feedback/>
            <BusinessModel/>
            <Office/>
            <Open/>
            <Footer/>
        </>
    );
};

export default GreenPage;
import React from 'react';
import CustomCss from '../CombineCss';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import Gallery from './Gallery';
import Service from './Service';
import Subcription from './Subcription';

const Home = () => {
    const { header } = CustomCss();
    return (
        <div>
            <Banner></Banner>
            <Service>
                <h2 className={header}>Find Best Places Forever</h2>
            </Service>
            <Subcription></Subcription>
            <Gallery></Gallery>
            <Footer />
        </div>
    );
};

export default Home;
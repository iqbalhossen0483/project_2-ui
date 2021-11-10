import React from 'react';
import CustomCss from '../CombineCss';
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
                <h2 className={header}>Our Leatest Services</h2>
            </Service>
            <Subcription></Subcription>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;
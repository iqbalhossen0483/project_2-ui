import React from 'react';
import { Link } from 'react-router-dom';
import CustomCss from '../CombineCss';

const Banner = () => {
    const { bgImg, banner, button } = CustomCss();
    return (
        <div style={bgImg} className={banner}>
            <p className="text-2xl md:text-4xl font-bold">Tour whole world and enhance your knowdlege</p>
            <p className="text-xl font-semibold">Find your best places</p>
            <Link to="#subscribe">
                <button className={button}>Subscribe now</button>
            </Link>
        </div>
    );
};

export default Banner;
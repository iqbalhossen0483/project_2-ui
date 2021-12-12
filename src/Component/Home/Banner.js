import React from 'react';
import CustomCss from '../CombineCss';

const Banner = () => {
    const { bgImg, banner, } = CustomCss();
    return (
        <div style={bgImg} className={banner}>
            <p className="text-2xl md:text-4xl font-bold">Tour whole world and enhance your knowdlege</p>
            <p className="text-xl font-semibold">Find your best places</p>
            <div className='flex justify-center mt-10'>
                <button className="btn">Subscribe now</button>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import CustomCss from '../CombineCss';
import Service from '../Home/Service';

const Survices = () => {
    const { header } = CustomCss();
    return (
        <div>
            <Service>
                <p className={header}>Our Services</p>
            </Service>
        </div>
    );
};

export default Survices;
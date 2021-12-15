import React from 'react';
import CustomCss from '../CombineCss';

const Subcription = () => {
    const { input, header } = CustomCss();
    return (
        <div className="bg-white mx-3 md:mx-10 mt-4 py-5 text-center">
            <h3 className={header}>Stay With Us</h3>
            <div className="flex flex-col items-center px-3 md:flex-row md:justify-center">
                <input className={input + "ml-2"} type="text" placeholder="Where to?" />
                <input className={input + "ml-2 w-64"} type="date" placeholder='Select date' />
                <input className={input + "ml-2"} type="text" placeholder="Destination?" />
                <input className="btn ml-5" type="submit" value="Subscribe" />
            </div>
        </div>
    );
};

export default Subcription;
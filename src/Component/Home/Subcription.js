import React from 'react';
import CustomCss from '../CombineCss';

const Subcription = () => {
    const { input, header } = CustomCss();
    return (
        <div className="bg-white py-5 text-center">
            <h3 className={header}>Stay With Us</h3>
            <input className={input} type="text" placeholder="Where to?" />
            <input className={input + "ml-2"} type="date" />
            <input className={input + "ml-2"} type="text" placeholder="Destination?" />
            <input className={input + "ml-2"} type="submit" value="Subscribe" />
        </div>
    );
};

export default Subcription;
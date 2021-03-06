import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomCss from '../CombineCss';

const Service = ({ children }) => {
    const { serviceContainer } = CustomCss();
    const [isLoading, setIsLoading] = useState(true);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://tourism-web-server-byrakib.herokuapp.com/services")
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setIsLoading(false);
            })
    }, []);
    if (isLoading) {
        return <div className="h-screen flex justify-center items-center">
            <div className="spinner"></div>
        </div>
    }
    return (
        <div className="px-3 md:px-10 py-5">
            {children}
            <div className={serviceContainer}>
                {
                    services.map(service => <div key={service._id} className="bg-white rounded shadow-lg">
                        <img className="h-40 w-full object-cover" src={service.img} alt="" />
                        <h3 className="text-2xl font-semibold my-3 text-center">{service.name}</h3>
                        <p className="px-3 text-justify">{service.description.slice(0, 300)}</p>
                        <div className="flex justify-center my-3 pb-3 md:pb-0">
                            <Link to={`/place-order/${service._id}`}><button className="btn">Book now</button></Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Service;
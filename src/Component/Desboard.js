import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomCss from './CombineCss';
import Footer from './Footer/Footer';

const Desboard = () => {
    const { link } = CustomCss();
    const outlet = Outlet();
    return (
        <div className='grid grid-cols-5'>
            <div className='flex flex-col bg-white fixed h-full w-64 pt-10'>
                <Link className={link} to="manage-orders">Manage Order</Link>
                <Link className={link} to="add-service">Add Service</Link>
            </div>
            <p></p>
            <div className='col-span-4 h-screen flex flex-col justify-between'>
                {outlet ? <Outlet /> : <div className='flex justify-center items-center h-full text-2xl'><p>Desboard</p></div>}
                <Footer />
            </div>
        </div>
    );
};

export default Desboard;
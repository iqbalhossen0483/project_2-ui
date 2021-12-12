import React from 'react';

const Footer = () => {
    return (
        <div className="bg-primary px-10 py-5 grid grid-cols-3">
            <div>
                <p className='text-2xl mb-2'>Contact Info</p>
                <p>PHONE: Toll Free (123) 456-7890</p>
                <p> EMAIL: mail@cycle-mart.com</p>
                <p>ADDRESS: 123 Street, Dhaka, Bangladesh</p>
                <p>WORKING DAYS / HOURS: Mon - Sun / 9.00 AM - 8.00 PM</p>
            </div>
            <div>
                <p className='text-2xl mb-2'>My Account</p>
                <p>About Us</p>
                <p>Order History</p>
                <p>Returns</p>
                <p>Customer Services</p>
                <p>Terms & Conditions</p>
            </div>
            <div>
                <p className='text-2xl mb-2'>Get in touch</p>
            </div>
        </div>
    );
};

export default Footer;
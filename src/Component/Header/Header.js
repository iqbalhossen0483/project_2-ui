import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomCss from '../CombineCss';
import useAuth from '../Firebase/useAuth';


const Header = () => {
    const [showNav, SetShowNav] = useState(true);
    const { link, headerSection } = CustomCss();
    const { user, LogOut } = useAuth();
    const navbar = () => {
        if (showNav) {
            SetShowNav(false)
        }
        else {
            SetShowNav(true)
        }
    }
    return (
        <>
            <div className="md:hidden text-right p-2 bg-white">
                <i onClick={navbar} className="fas fa-bars"></i></div>
            {showNav && <div className={headerSection}>
                <div className="flex flex-col md:flex-row">
                    <Link className={link} to="/home">Home</Link>
                    <Link className={link} to="/services">Services</Link>
                    <Link className={link} to="/manage-orders">Manage Order</Link>
                    <Link className={link} to="/add-service">Add Service</Link>
                </div>
                <div className="flex">
                    {user.email && <div className="flex items-center">
                        <Link className={link} to="/my-order">My Orders</Link>
                        {user.photoURL ?
                            <img className="w-12 h-12 rounded-full ml-3" src={user.photoURL} alt="" /> :
                            <i className="fas fa-user text-3xl ml-3"></i>
                        }
                    </div>}
                    {!user.email ?
                        <div className="flex flex-col md:flex-row">
                            <Link className={link} to="/sign-up">Sign UP</Link>
                            <Link className={link} to="/sign-in">Sign In</Link>
                        </div> :
                        <button className={link} onClick={LogOut}><i className="fas fa-sign-out-alt text-2xl"></i></button>
                    }
                </div>
            </div>}
        </>
    );
};

export default Header;
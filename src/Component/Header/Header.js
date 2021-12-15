import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomCss from '../CombineCss';
import useAuth from '../Firebase/useAuth';


const Header = () => {
    const [showNav, setShowNav] = useState(true);
    const [change, setChange] = useState(false);
    const { link, headerSection } = CustomCss();
    const { user, LogOut } = useAuth();

    const navbar = () => {
        if (showNav) {
            setShowNav(false)
        }
        else {
            setShowNav(true)
        }
    };

    const changeBg = () => {
        if (window.scrollY >= 60) {
            setChange(true);
        } else {
            setChange(false);
        }
        if (window.innerWidth < 480 && window.scrollY > 600) {
            setShowNav(false)
        }
    };
    const screenChanged = () => {
        if (window.innerWidth < 480) {
            setShowNav(false);
        } else {
            setShowNav(true);
        }
    };
    window.addEventListener("resize", screenChanged);

    window.addEventListener("scroll", changeBg);
    return (
        <>
            <div className={`md:hidden sticky top-0 text-right px-2 py-1 ${change ? "bg-primary z-20" : "bg-white z-20"}`}>
                <i onClick={navbar} className="fas fa-bars"></i>
            </div>
            {showNav && <div className={`${headerSection} ${change ? "bg-primary z-20" : "bg-white z-20"}`}>
                <div className="flex flex-col md:flex-row">
                    <Link className={link} to="/home">Home</Link>
                    <Link className={link} to="/services">Best Places</Link>
                    <Link className={link} to="/blogs">Blogs</Link>
                    {user.email && <>
                        <Link className={link} to="/add-blog">Add Blog</Link>
                    </>}
                </div>
                <div className="flex">
                    {user.email && <div className="flex items-center">
                        <Link className={link} to="/my-order">My Orders</Link>
                        {user.photoURL ?
                            <img className="w-10 h-10 rounded-full ml-3" src={user.photoURL} alt="" /> :
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
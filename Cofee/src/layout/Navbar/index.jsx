import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBars, FaInstagram } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { MainContext } from '../../context/MainContext';
import { BsBox2HeartFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BeigeButton } from '../../components/Button';
import { FaPhone } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";


function Navbar() {
    const { handleSidebarOpen, sidebarOpen } = useContext(MainContext);
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const { basketOpen, wishlistiOpen } = useContext(MainContext);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsFixed(scrollPosition > 600);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSearchOpen = () => {
        setIsSearchOpen(!isSearchOpen)
    }
    const navbarStyle = {
        transition: 'all 0.3s ease',
    };
    return (
        <>
            <nav id='nav' className={isFixed ? 'fixed-navbar' : 'normal-navbar'} style={navbarStyle}>
                <div className="container">
                    <div className="navbox">
                        <div className="navlogo">
                            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo-black.png" alt="" />
                        </div>
                        <div className="mobilemenu">
                            <ul className='mobileul'>
                                <NavLink activeclassname={'active'} to={"/"} ><li>Home</li></NavLink>
                                <NavLink to={"/about"}><li>About</li></NavLink>
                                <NavLink to={"/menu"}><li>Menu</li></NavLink>
                                <NavLink to={"/reservation"}><li>Reservation</li></NavLink>
                                <a className={"pages"}><li>Pages
                                    <ul className='pagesul'>
                                        <li>Blog</li>
                                        <li>Blog Details</li>
                                        <li>Chefs</li>
                                        <NavLink to={"/faq"}>FAQ</NavLink>
                                        <li>Story</li>
                                        <li>Gallery</li>
                                    </ul>
                                </li></a>
                                <NavLink to={"/shop"} className={"shop"}><li>Shop
                                    <ul className='shopul'>
                                        <li>Shop</li>
                                        <li>Shop Details</li>
                                        <li>Shop Shop</li>
                                        <li>Shop Checkout</li>
                                    </ul>
                                </li></NavLink>
                                <NavLink to={"/contact"}><li>Contact</li></NavLink>
                            </ul>
                        </div>
                        <div className='rightmenu'>
                            <div className='iconsdiv' onClick={handleSearchOpen}>
                                <FaMagnifyingGlass />

                            </div>
                            <div className={isSearchOpen ? "search" : "dnone"}>
                                <div className='searchinput'>
                                    <input type="text" />
                                    <span><FaMagnifyingGlass /></span>
                                </div>
                            </div>
                            <div className='iconsdiv'>
                                <button onClick={handleSidebarOpen}> <FaBars /></button>
                            </div>
                            <div className='iconsdiv'>
                                <button onClick={() => basketOpen()}><FaShoppingBasket /></button>
                            </div>
                            <div className='iconsdiv'>
                                <button onClick={() => wishlistiOpen()}>                            <BsBox2HeartFill /></button>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
            <nav className={`sidenavbar ${sidebarOpen ? "opened" : ""}`}>
                <div className="sidebox">
                    <div className="sidetop">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo-black.png" alt="" />
                        <h4>ABOUT US</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo consequat.</p>
                        <BeigeButton text={"About Us"} />
                    </div>
                    <div className="sidebottom">
                        <h4>CONTACT US</h4>
                        <ul className="sidecontact">
                            <li>
                                <FaLocationDot />  Bowery St., New York, NY 10013, USA
                            </li>
                            <li>
                                <FaPhone />   +1255-568-6523
                            </li>
                            <li>
                                <SlEnvolopeLetter />  information@gmail.com
                            </li>
                        </ul>
                        <div className="bottomicons">
                            <div className="icondiv">
                                <i>
                                    <FaTwitter />
                                </i>
                            </div>
                            <div className="icondiv">
                                <i>
                                    <FaFacebookF />
                                </i>
                            </div>
                            <div className="icondiv">
                                <i>
                                    <FaYoutube />
                                </i>
                            </div>
                            <div className="icondiv">
                                <i>
                                    <FaGooglePlusG />
                                </i>
                            </div>
                            <div className="icondiv">
                                <i>
                                    <FaInstagram />
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar



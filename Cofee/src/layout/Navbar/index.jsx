import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { MainContext } from '../../context/MainContext';
import { BsBox2HeartFill } from "react-icons/bs";

function Navbar() {
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

    const handleSearchOpen = ()=>{
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
                                <button> <FaBars /></button>
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
        </>
    )
}

export default Navbar



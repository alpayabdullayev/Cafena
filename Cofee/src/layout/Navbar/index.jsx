import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const handleSearchOpen = ()=>{
        setIsSearchOpen(!isSearchOpen)
    }
    return (
        <>
            <nav id='nav'>
                <div className="container">
                    <div className="navbox">
                        <div className="mobilemenu">
                            <ul className='mobileul'>
                                <NavLink activeclassname={'active'} to={"/"} ><li>Home</li></NavLink>
                                <NavLink to={"/about"}><li>About</li></NavLink>
                                <NavLink to={"/menu"}><li>Menu</li></NavLink>
                                <NavLink to={"/reservation"}><li>Reservation</li></NavLink>
                                <NavLink to={"/salam"} className={"pages"}><li>Pages
                                    <ul className='pagesul'>
                                        <li>Blog</li>
                                        <li>Blog Details</li>
                                        <li>Chefs</li>
                                        <li>FAQ</li>
                                        <li>Story</li>
                                        <li>Gallery</li>
                                    </ul>
                                </li></NavLink>
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
                                <FaBars />
                            </div>
                            <div className='iconsdiv'>
                                <FaShoppingBasket />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
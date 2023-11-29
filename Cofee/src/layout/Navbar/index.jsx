import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

function Navbar() {
    return (
        <>
            <nav id='nav'>
                <div className="container">
                    <div className="navbox">
                        <div className="mobilemenu">
                            <ul className='mobileul'>
                                <li><NavLink activeClassName={'active'} to={"/"} >Home</NavLink></li>
                                <li><NavLink to={"/"}>About</NavLink></li>
                                <li><NavLink to={"/"}>Menu</NavLink></li>
                                <li><NavLink to={"/"}>Reservation</NavLink></li>
                                <li><NavLink to={"/"}>Pages</NavLink></li>
                                <li><NavLink to={"/"}>Shop</NavLink></li>
                                <li><NavLink to={"/"}>Contact</NavLink></li>
                            </ul>
                        </div>
                        <div className='rightmenu'>
                            <div className='iconsdiv'>
                                <FaMagnifyingGlass />
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
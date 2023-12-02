import React from 'react'
import "./index.scss"
import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { NavLink } from 'react-router-dom';


function Footer({linkvalue}) {
    return (
        <footer id='footer'>
            <div className="container">
                <div className='footerbox'>
                    <div className="footertop">
                        <div className="toparrow">
                            <a href={linkvalue}>
                                <IoIosArrowRoundUp />
                            </a>
                        </div>
                        <div className="topitems">
                            <div className="nums">
                                <div className="numbox">
                                    <i><IoIosPhonePortrait /></i>
                                    <p>Phone : <a href="">
                                        +88019 339 702 520</a></p>

                                </div>
                                <div className="numbox">
                                    <i><CiLocationOn /></i>
                                    <p>ADDRESS  : <a href="">
                                    30 North West New</a></p>
                                        

                                </div>
                            </div>
                            <div className="input">
                                <input placeholder='Enter Your Email' type="text" />
                                <button>
                                    Subscribe
                                    <span><IoIosSend /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="footerbottom">
                        <div className="bottomleft">
                            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo.png" alt="" />
                            <p>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum</p>
                        </div>
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
            </div>
            <div className='line'></div>
            <div className="container">
                <div className="footernav">
                    <ul className='footerul'>
                        <NavLink activeclassname={'active'} to={"/"} ><li>Home</li></NavLink>
                        <NavLink to={"/about"}><li>About</li></NavLink>
                        <NavLink to={"/menu"}><li>Menu</li></NavLink>
                        <NavLink to={"/reservation"}><li>Reservation</li></NavLink>
                        <NavLink to={"/salam"}><li>Pages
                        </li></NavLink>
                        <NavLink to={"/shop"}><li>Shop
                        </li></NavLink>
                        <NavLink to={"/contact"}><li>Contact</li></NavLink>
                    </ul>
                    <div className='gotop'>
                        <a href={linkvalue}>
                            Go Top
                            <span><IoIosArrowRoundUp /></span>
                        </a>    
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
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
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer id='footer'>
            <div className="container">
                <div className='footerbox'>
                    <div className="footertop">
                        <div className="toparrow">
                            <a href="#header">
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
                                    <i><IoIosPhonePortrait /></i>
                                    <p>Phone : <a href="">
                                        +88019 339 702 520</a></p>

                                </div>
                            </div>
                            <div className="input">
                                <input type="text" />
                                <button>
                                    Subscribe
                                    <IoIosSend />
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
        </footer>
    )
}

export default Footer
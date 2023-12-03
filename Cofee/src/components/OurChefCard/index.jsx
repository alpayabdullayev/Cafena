import React from 'react'
import "./index.scss"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function OurChefCard({cardimg,chefname,exp}) {
  return (
    <div className='chefcard'>
        <div className="cardtop">
            <img src={cardimg} alt="" />
            <div className="buttons">
                <button className='plus'>+</button>
                <button className='fb'><FaFacebookF /></button>
                <button className='tw'><FaTwitter /></button>
                <button className='pin'><FaPinterestP /></button>
                <button className='lin'><FaLinkedinIn /></button>
            </div>
        </div>
        <div className="cardbottom">
            <h4>{chefname}</h4>
            <span>{exp}</span>
        </div>
    </div>
  )
}

export default OurChefCard
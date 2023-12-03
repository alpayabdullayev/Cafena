import React, { useState } from 'react'
import "./index.scss"
import { FaArrowDown } from "react-icons/fa6";

function FAQitem({title,content}) {
    const [isFaqOpen, setIsFaqOpen] = useState(false)
    const handleFaqOpen =()=>{
        setIsFaqOpen(!isFaqOpen)
        
    }
  return (
    <div className='faqitem'>
        <div className="faqtop">
            <button className={isFaqOpen ? "hoverbutton" : ""} onClick={handleFaqOpen}><FaArrowDown /></button>
            <h2 onClick={handleFaqOpen}>{title}</h2>
        </div>
        <div className={isFaqOpen ? "faqbottom" : "dnone"}>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default FAQitem
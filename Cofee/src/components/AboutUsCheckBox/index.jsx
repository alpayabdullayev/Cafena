import React from 'react'
import "./index.scss"
import { AiOutlineCheck } from "react-icons/ai";

const AboutCheckBox = () => {
    return (
        <>

            <div class="about-list">
                <span className="spnadida"><span><AiOutlineCheck className="icons-passed" /></span> <p> What is Lorem Ipsum Lorem Ipsum is simply.</p></span>
                <span className="spnadida"><span><AiOutlineCheck className="icons-passed" /></span><p>Dummy text of the printing text.</p></span>
                <span className="spnadida">
                    <span><AiOutlineCheck className="icons-passed" /></span><p>Typesetting industry Lorem Ipsum has been the industry's</p>
                </span>
            </div>

        </>
    )
}

export default AboutCheckBox
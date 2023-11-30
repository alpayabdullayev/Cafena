import React, { useState } from 'react'
import "./index.scss"
import { TbPlayerPlayFilled } from "react-icons/tb";
import { IoCloseCircleOutline } from "react-icons/io5";
import { WhiteButton } from '../Button';
import { BeigeButton } from '../Button';


function Header() {
    const [isVideoOpen, setIsVideoOpen] = useState(false)

    const handleVideoOpen = () => {
        setIsVideoOpen(!isVideoOpen)
    }
    return (
        <>
            <header id='header'>
                <div className={`${isVideoOpen ? "video" : "dnone"}`}>
                    <div className='closebtn'>
                    <IoCloseCircleOutline onClick={() => handleVideoOpen()} />
                    </div>
                    <iframe width="800" height="500" src="https://www.youtube.com/embed/4xe72U7mXNg" title="CGI Animated Short Film HD &quot;A Fox Tale &quot; by A Fox Tale Team | CGMeetup" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="container">
                    <div className='headerbox'>
                        <div className="headerleft">
                            <div className="headertext">
                                <div>
                                    <h1>Distinct <br />
                                        coffee aroma</h1>
                                    <p>The coffee is brewed by first roasting the green coffee beans over hot <br /> coals in a brazier. given an opportunity to sample.</p>
                                </div>
                                <div className="buttons">
                                    <WhiteButton text={"Testy Coffee"}></WhiteButton>
                                    <BeigeButton text={"Read More"}></BeigeButton>
                                </div>
                            </div>
                        </div>
                        <div className="headerright">
                            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/hero/hero-img-2-1.png" alt="" />
                            <div className='player'>
                                <div className='circle' onClick={() => handleVideoOpen()}>
                                    <span className='circlespan'>
                                    <TbPlayerPlayFilled />
                                    </span>
                                </div>
                                <p onClick={()=>handleVideoOpen()}>PLAY VIDEO</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='headerbg1' src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/hero-shape-2-1.png" alt="" />
                
            </header>
        </>
    )
}

export default Header
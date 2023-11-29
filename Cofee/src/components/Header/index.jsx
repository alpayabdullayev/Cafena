import React from 'react'
import "./index.scss"
import { TbPlayerPlayFilled } from "react-icons/tb";

function Header() {
    return (
        <header id='header'>
            <div className="container">
                <div className='headerbox'>
                    <div className="headerleft">
                        <div className="headertext">
                            <h1>Distinct <br />
                                coffee aroma</h1>
                            <p>The coffee is brewed by first roasting the green coffee beans over hot <br /> coals in a brazier. given an opportunity to sample.</p>
                            <div className="buttons">
                                <button>Testy Coffee</button>
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="headerright">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/hero/hero-img-2-1.png" alt="" />
                        <div className='player'>
                            <div className='circle'>
                            <TbPlayerPlayFilled />
                            </div>
                            <p>PLAY VIDEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
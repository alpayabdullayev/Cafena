import "./index.scss"
import React from 'react'
import { BeigeButton } from "../Button"
import NewsCard from "../NewsCard"

function News() {
    return (
        <section id="news">
            <div className="container">
                <div className="newsbox">
                    <div className="newstop">
                        <div className="latestnews">
                            <span class="sub-title">News &amp; Blog</span>
                            <h2 class="title">Latest news &amp; Blog</h2>
                        </div>
                        <div className="learnmore">
                            <BeigeButton text={"Learn More"} />
                        </div>
                    </div>
                    <div className="newsbottom">
                    <NewsCard />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News
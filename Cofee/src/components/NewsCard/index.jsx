import "./index.scss"
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";

function NewsCard() {
    return (
        <div className="newscard">
            <div className="card">
                <div className="cardimg">
                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/blog/blog-2-1.jpeg" alt="" />
                </div>
                <div className="cardtext">
                    <ul className="cardul">
                        <li className="rasalina">BY: <span>RASALINA</span></li>
                        <li><h3>
                            Questions business must be able to answers</h3></li>
                        <li className="buttonli"><button className="cardbutton">Read More <FaLongArrowAltRight /></button>
                        <i><CiShare2 /></i></li>
                    </ul>
                </div>
            </div>
            <div className="card">
                <div className="cardimg">
                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/blog/blog-2-1.jpeg" alt="" />
                </div>
                <div className="cardtext">
                    <ul className="cardul">
                        <li className="rasalina">BY: <span>RASALINA</span></li>
                        <li><h3>
                        Build A Cool Mornig With Cafena Coffee</h3></li>
                        <li className="buttonli"><button className="cardbutton">Read More <FaLongArrowAltRight /></button>
                        <i><CiShare2 /></i></li>
                    </ul>
                </div>
            </div>
            <div className="card">
                <div className="cardimg">
                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/blog/blog-2-1.jpeg" alt="" />
                </div>
                <div className="cardtext">
                    <ul className="cardul">
                        <li className="rasalina">BY: <span>RASALINA</span></li>
                        <li><h3>
                        Ideal Cocktails From Our Barmen For  Mood</h3></li>
                        <li className="buttonli"><button className="cardbutton">Read More <FaLongArrowAltRight /></button>
                        <i><CiShare2 /></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
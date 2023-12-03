import React from "react";
import "./index.scss"

import { CiStar } from "react-icons/ci";
const FiltersTopFour = ({ image,name,priceDiscounted,priceOriginal,rating }) => {

    const stars = [];
  
    for (let i = 0; i < rating; i++) {
      stars.push(<span> <CiStar key={i} /></span> );
    }

  return (
    <>


        <div className="topFourContent">
          <div className="topImg">
            <img src={image} alt="" />
          </div>
          <div className="topFourBody">
            <div className="ratingStar">
            {stars}
            </div>
            <div>
              <p className="TopName">{name}</p>
            </div>
            <div>
                <p><span className="ratingStar">${priceDiscounted}</span> / <span className="delPrice"><del>${priceOriginal}</del></span></p>
            </div>
          </div>
        </div>

    </>
  );
};

export default FiltersTopFour;

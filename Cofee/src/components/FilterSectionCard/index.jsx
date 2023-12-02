import React, { useContext } from "react";
import "./index.scss"
import { BasketContext } from "../../context/BasketContext";
const FilterSectionCard = ({image,image2,brand,name,price,item}) => {
  const {handleBasket} = useContext(BasketContext)
  return (
    <div className="col-12 col-xs-6 col-md-4 cardFilterCol ">
      <div className="cardFilter ">
        <div className="productImgFilter">
            <img className="img1filter" src={image} alt="" />
            <img className="img2filter" src={image2} alt="" />
        </div>

        <div>
            <p>{brand}</p>
            <h2>{name}</h2>
            <p>price ${price.original}</p>
            <button onClick={()=>handleBasket(item)}>addbasket</button>
        </div>
      </div>
    </div>
  );
};

export default FilterSectionCard;

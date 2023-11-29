import React from "react";
import "./index.scss";
import { RiShoppingBasket2Line } from "react-icons/ri";

const SpecialCard = ({ image, name, price }) => {
  return (
    <>
    
      <div className="cardsMenu">
        <div className="card-img">
          <img src={image} alt="" />
        </div>

        <div className="popular-menu">
          <h2 className="coffeName">
            <a>{name}</a>
          </h2>
          <div className="CardContent d-flex">
            <div className="price">
            <h6 className="label">Price - </h6>
            <span className="priceR">
              {price.discounted} /
              <span className="regular">
                <del>${price.original}</del>
              </span>
            </span>
            </div>
            <div className="buttonsActions">
                <button><RiShoppingBasket2Line /></button>
                <button><RiShoppingBasket2Line /></button>
                <button><RiShoppingBasket2Line /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialCard;

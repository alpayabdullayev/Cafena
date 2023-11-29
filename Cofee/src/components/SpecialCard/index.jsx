import React, { useContext } from "react";
import "./index.scss";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { BasketContext } from "../../context/BasketContext";
import { FaRegHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import { WishlistContext } from "../../context/WishlistContext";
import { Link } from "react-router-dom";


const SpecialCard = ({ image, name, price,item }) => {
  const { handleBasket } = useContext(BasketContext);
  const {toggleHeart,heart} = useContext(WishlistContext)

  return (
    <>
    
      <div className="cardsMenu">
        <div className="card-img">
        <Link to={`/product/${item.id}`}><img src={image} alt="" /></Link>
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
                <button onClick={() => handleBasket(item)}><RiShoppingBasket2Line /></button>
                <button onClick={() => toggleHeart(item)}>
                    {heart.includes(item.id) ? (
                      <IoIosHeart />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                <button><FaEye /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialCard;

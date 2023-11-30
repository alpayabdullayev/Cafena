import React, { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

const BasketCard = ({ image, name, category, rating, count, item }) => {
  const {handleRemove,handleCountVal} = useContext(BasketContext)
  const {toggleHeart,heart} = useContext(WishlistContext)
  return (
    <>
      <div className="cardProduct">
        <div className="cardContent">
          <div className="cardImg">
            <img src={image} alt="" />
          </div>
          <div className="cardBody">
            <button onClick={() => toggleHeart(item)}>
              {heart.includes(item.id) ? <IoIosHeart /> : <FaRegHeart />}
            </button>
            <h1>{name}</h1>
            <p>{category}</p>
            <p>{rating}</p>
            <p>{count}</p>
            <p>total: {item.count * item.price.discounted}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketCard;

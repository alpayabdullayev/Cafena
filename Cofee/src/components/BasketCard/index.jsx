import React, { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import "./index.scss"

const BasketCard = ({ image, name, category, rating, count, item,price }) => {
  const {handleRemove,handleCountVal} = useContext(BasketContext)
  const {toggleHeart,heart} = useContext(WishlistContext)
  return (
    <>
      <div className="cardProduct">
        <div className="cardContent ">
          <div className="cardImgBasket">
            <img src={image} alt="" />
          </div>
          <div className="cardBody">

            <div>
            <h1>{name}</h1>
            <p>{category}</p>
            <p>${price.original}</p>
            <p>{count}</p>
            </div>


          </div>
          <div className="buttoncardBasket row">
            <button onClick={() => toggleHeart(item)}>
              {heart.includes(item.id) ? <IoIosHeart /> : <FaRegHeart />}
            </button>
            <button onClick={()=>handleRemove(item.id)}>X</button>
            
            <button onClick={()=>handleCountVal(true,item)}>+</button>
            <p>{item.count}</p>
            <button onClick={()=>handleCountVal(false,item)}>-</button>

            </div>
        </div>
        <p>total: {item.count * item.price.discounted}</p>

      </div>
    </>
  );
};

export default BasketCard;

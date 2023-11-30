import React, { useContext } from 'react'
import { WishlistContext } from "../../context/WishlistContext";

import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { BasketContext } from "../../context/BasketContext";


const WishlistCard = ({image,name,item}) => {
    const {handleBasket} = useContext(BasketContext)
    const {toggleHeart,heart} = useContext(WishlistContext)
  return (
    <>
    
    <div className="cardWishlist">
        <div className="cardWishlistContent">
            <div className="cardWishlistImg">
                <img src={image} alt="" />
            </div>
              <button onClick={() => handleBasket(item)}>AddToCart</button>
              <button onClick={() => toggleHeart(item)}>
                {heart.includes(item.id) ? (
                  <IoIosHeart />
                ) : (
                  <FaRegHeart />
                )}
              </button>
              <p>{name}</p>
        </div>
    </div>

    </>
  )
}

export default WishlistCard
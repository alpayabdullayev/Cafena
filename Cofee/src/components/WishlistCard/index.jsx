import React, { useContext } from 'react'
import "./index.scss"
import { WishlistContext } from "../../context/WishlistContext";

import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { BasketContext } from "../../context/BasketContext";


const WishlistCard = ({ image, name, item }) => {
  const { handleBasket } = useContext(BasketContext)
  const { toggleHeart, heart } = useContext(WishlistContext)
  return (
    <>

      <div className="cardWishlist">
        <div className="cardWishlistContent">
          <div className="cardWishlistImg">
            <img src={image} alt="" />
          </div>
          <div className='buttonswish'>
            <button className='cardbtn' onClick={() => handleBasket(item)}>AddToCart</button>
            <button className='heartbtn' onClick={() => toggleHeart(item)}>
              {heart.includes(item.id) ? (
                <IoIosHeart />
              ) : (
                <FaRegHeart />
              )}
            </button>
          </div>
          <p>{name}</p>
        </div>
      </div>

    </>
  )
}

export default WishlistCard
import React, { useContext } from "react";
import "./index.scss"
import { BasketContext } from "../../context/BasketContext";
import { FaBasketShopping } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast'
import { WishlistContext } from "../../context/WishlistContext";
import { FaRegHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";


const FilterSectionCard = ({image,image2,brand,name,price,item,selectedButton}) => {
  const {handleBasket} = useContext(BasketContext)
  const { wishlist, setWishlist,heart,setHeart,toggleHeart} = useContext(WishlistContext)
  const handleToggleHeart = () => {
    

    toggleHeart(item);
    // setIsHeartToggled(true);
  };
  return (
    <div className={`cardFilterCol ${selectedButton}`}>
      <div className="cardFilter ">
        <div className="socialIconsFilter">
          <span onClick={()=>handleBasket(item)} className="socialIconFilter">
          <FaBasketShopping />
          </span>
          <span className="socialIconFilter" onClick={handleToggleHeart}>
                {heart.includes(item.id) ? (
                  <IoIosHeart />
                ) : (
                  <FaRegHeart />
                )} 
          </span>
          <span className="socialIconFilter">
          <FaEye/>

          
          </span>
        </div>
        <div className="productImgFilter">
            <img className="img1filter" src={image} alt="" />
            <img className="img2filter" src={image2} alt="" />
        </div>

        <div>
            <p>{brand}</p>
            <h2>{name}</h2>
            <p>price ${price.original}</p>
        </div>
      </div>
    </div>
  );
};

export default FilterSectionCard;

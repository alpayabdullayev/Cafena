import React, { useContext } from 'react'
import { FaShare } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiUber } from "react-icons/si";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { BasketContext } from '../../context/BasketContext';
import { WishlistContext } from '../../context/WishlistContext';

const DetailCardSection = ({handleColClick,bigImgSrc,product}) => {

    

    const { handleBasket } = useContext(BasketContext);
    const { toggleHeart, heart } = useContext(WishlistContext);
  return (
    
    <>
    
    <div className="detailCard">
        <div className="container">
          <div className="detail-content ">
            <div className="big-img ">
              <img src={bigImgSrc || product.image2} alt="" />
            </div>

            <div className="">
              <div
                className="col-4Img"
                onClick={() => handleColClick(product.image2)}
              >
                <img src={product.image2} alt="image 1" />
              </div>
              <div
                className="col-4Img"
                onClick={() => handleColClick(product.image3)}
              >
                <img src={product.image3} />
              </div>
              <div
                className="col-4Img"
                onClick={() => handleColClick(product.image)}
              >
                <img src={product.image} />
              </div>
            </div>
            <div className="product-info ">
              <h1>{product.name}</h1>
              <p>{product.descriptions}</p>
              <p className="pricep">
                <span>
                  <RiVerifiedBadgeFill />
                </span>
                {product.status}
              </p>
              <p>$25</p>
              <div class="variations">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3>Product Category: {product.category}</h3>

              <h4>BRAND: {product.brand}</h4>
              <h3>STATUS: {product.status}</h3>
              <button onClick={() => handleBasket(product)}>
                Add to Basket
              </button>
              <button
                className="toggleheartz"
                onClick={() => toggleHeart(product)}
              >
                {heart.includes(product.id) ? <IoIosHeart /> : <FaRegHeart />}
              </button>

              <div className="share">
                <span>
                  <span className="shareicon">
                    <FaShare />
                  </span>
                  Share
                </span>
                <div>
                  <div className="socialicons">
                    <span>
                      <CiTwitter />
                    </span>
                    <span>
                      <FaFacebookF />
                    </span>
                    <span>
                      <FaInstagram />
                    </span>

                    <span>
                      <FaYoutube />
                    </span>

                    <span>
                      <SiUber />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailCardSection
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import PageTitle from "../../components/PageTitle";
// import ReactImageMagnify from 'react-image-magnify';
import { FaShare } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiUber } from "react-icons/si";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import TabsSection from "../../components/TabDetails";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [bigImgSrc, setBigImgSrc] = useState("");
  const [backgroundPosition, setBackgroundPosition] = useState('50% 50%');

  const { handleBasket } = useContext(BasketContext);
  const { toggleHeart, heart } = useContext(WishlistContext);

  async function getProductDetails() {
    const data = await fetch(`http://localhost:3000/products/${productId}`);
    const res = await data.json();
    setProduct(res);
    setBigImgSrc(res.image2 || "");
  }

  useEffect(() => {
    getProductDetails();
    console.log(product);
    setBigImgSrc(product.image2);
  }, [productId]);

  const handleColClick = (imgSrc) => {
    setBigImgSrc(imgSrc);
  };
  // const [backgroundPosition, setBackgroundPosition] = useState("10% 10%");

  // const zoom = (e) => {
  //   const zoomer = e.currentTarget;
  //   let offsetX, offsetY;

  //   if (e.nativeEvent.offsetX) {
  //     offsetX = e.nativeEvent.offsetX;
  //     offsetY = e.nativeEvent.offsetY;
  //   } else {
  //     offsetX = e.touches[0].pageX - zoomer.offsetLeft;
  //     offsetY = e.touches[0].pageY - zoomer.offsetTop;
  //   }

  //   const x = (offsetX / zoomer.offsetWidth) * 100;
  //   const y = (offsetY / zoomer.offsetHeight) * 100;

  //   setBackgroundPosition(`${x}% ${y}%`);
  // };
  // const zoom = (e) => {
  //   const zoomer = e.currentTarget;
  //   let offsetX, offsetY;

  //   if (e.offsetX) {
  //     offsetX = e.offsetX;
  //     offsetY = e.offsetY;
  //   } else {
  //     offsetX = e.touches[0].pageX;
  //     offsetY = e.touches[0].pageY;
  //   }

  //   const x = (offsetX / zoomer.offsetWidth) * 100;
  //   const y = (offsetY / zoomer.offsetHeight) * 100;

  //   zoomer.style.backgroundPosition = `${x}% ${y}%`;
  // };

  // const handleZoom = (e) => {
  //   const zoomer = e.currentTarget;
  //   const offsetX = e.nativeEvent.offsetX || e.touches[0].pageX;
  //   const offsetY = e.nativeEvent.offsetY || e.touches[0].pageY;
  //   const x = (offsetX / zoomer.offsetWidth) * 100;
  //   const y = (offsetY / zoomer.offsetHeight) * 100;
  //   setBackgroundPosition(`${x}% ${y}%`);
  // };

  const backgroundImage = bigImgSrc || product.image2;

  return (
    <>
      <PageTitle title={"Product Details"} />
      <div className="detailCard">
        <div className="container">
          <div className="detail-content ">
          <div className="big-img ">
          {/* <figure
      className="zoom"
      onMouseMove={handleZoom}
      onTouchMove={handleZoom}
      style={{
        backgroundPosition,
        position: 'relative',
        height: '300px',
        width: '500px',
        overflow: 'hidden',
        cursor: 'zoom-in',
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <img
        src={backgroundImage}
        alt="Zoomed Image"
        style={{
          transition: 'opacity 0.5s',
          display: 'block',
          width: '100%',
        }}
      />
    </figure> */}
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
              <p className="pricep"><span><RiVerifiedBadgeFill /></span>{product.status}</p>
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
                  {" "}
                  <span className="shareicon">
                    {" "}
                    <FaShare />
                  </span>{" "}
                  Share
                </span>
                <div>
                  <div className="socialicons">
                    <span>
                      {" "}
                      <CiTwitter />{" "}
                    </span>
                    <span>
                      <FaFacebookF />{" "}
                    </span>
                    <span>
                      <FaInstagram />
                    </span>

                    <span>
                      <FaYoutube />{" "}
                    </span>

                    <span>
                      <SiUber />{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TabsSection/>
    </>
  );
}

export default ProductDetail;

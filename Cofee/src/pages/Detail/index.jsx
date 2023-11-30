import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import PageTitle from "../../components/PageTitle";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [bigImgSrc, setBigImgSrc] = useState("");

  const { handleBasket } = useContext(BasketContext);
  const { toggleHeart, heart } = useContext(WishlistContext);

  async function getProductDetails() {
    const data = await fetch(`http://localhost:3000/products/${productId}`);
    const res = await data.json();
    setProduct(res);
  }

  useEffect(() => {
    getProductDetails();
    console.log(product);
    setBigImgSrc(product.image2)
  }, []);

  const handleColClick = (imgSrc) => {
    setBigImgSrc(imgSrc);
  };

  return (
    <>
      <PageTitle title={"Product Details"} />
      <div className="detailCard">
        <div className="container">
          <div className="detail-content ">
            <div className="big-img ">
              
              
              <img src={bigImgSrc || product.image2} alt="Big Image" />
            </div>
            <div className="">
              <div className="col-4Img" onClick={() => handleColClick(product.image2)}>
                <img src={product.image2} alt="image 1" />
              </div>
              <div className="col-4Img" onClick={() => handleColClick(product.image3)}>
                <img src={product.image4}  />
              </div>
              <div className="col-4Img" onClick={() => handleColClick(product.image4)}>
                <img src={product.image4}  />
              </div>
            </div>
            <div className="product-info ">
              <h1>{product.name}</h1>
              <p>{product.descriptions}</p>
              <p>{product.status}</p>
              <p>{}</p>
              <h3>Product Category: {product.category}</h3>

              <h4>BRAND: {product.brand}</h4>
              <h3>STATUS: {product.status}</h3>
              <button onClick={() => handleBasket(product)}>Add to Basket</button>
              <button onClick={() => toggleHeart(product)}>
                {heart.includes(product.id) ? <IoIosHeart /> : <FaRegHeart />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;

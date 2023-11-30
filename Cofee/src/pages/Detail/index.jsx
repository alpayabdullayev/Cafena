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

  const { handleBasket } = useContext(BasketContext);
  const { toggleHeart, heart } = useContext(WishlistContext);

  async function getProductDetails() {
    const data = await fetch(`http://localhost:3000/products/${productId}`);
    const res = await data.json();
    setProduct(res);
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <>
      <PageTitle title={"Product Details"} />
      <div className="detailCard">
        <div className="container">
          <div className="detail-content">
            <div className="product-img">
              <img src={product.image} alt="" />
            </div>
            <div className="product-info">
              <h3> Poduct Category:{product.category}</h3>
              <p>{product.descriptions}</p>
              <h4>BRAND:{product.brand}</h4>
              <h3>STATUS :{product.status}</h3>
              <button onClick={() => handleBasket(product)}>AddToBasket</button>
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

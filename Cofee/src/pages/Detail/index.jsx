import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";

import PageTitle from "../../components/PageTitle";

import TabsSection from "../../components/TabDetails";
import DetailReletad from "../../components/DetailReletad";
import DetailCardSection from "../../components/DetailCardSection";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [bigImgSrc, setBigImgSrc] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);
  // const [backgroundPosition, setBackgroundPosition] = useState('50% 50%');

  const { handleBasket } = useContext(BasketContext);
  const { toggleHeart, heart } = useContext(WishlistContext);

  async function getProductDetails() {
    const data = await fetch(`http://localhost:3000/products/${productId}`);
    const res = await data.json();
    setProduct(res);
    setBigImgSrc(res.image2 || "");
  }

  async function getRelatedProducts(categoryIds) {
    const data = await fetch(`http://localhost:3000/products`);
    const res = await data.json();

    const filteredProducts = res.filter(
      (relatedProduct) =>
        relatedProduct.categoryID &&
        relatedProduct.categoryID.some((id) => categoryIds.includes(id)) &&
        relatedProduct.id !== parseInt(productId)
    );

    setRelatedProducts(filteredProducts.slice(0, 4));
  }
  useEffect(() => {
    getProductDetails();
    console.log(product);
    setBigImgSrc(product.image2);
  }, [productId]);

  useEffect(() => {
    if (product.categoryID) {
      getRelatedProducts(product.categoryID);
    }
  }, [product.categoryID, productId]);

  const handleColClick = (imgSrc) => {
    setBigImgSrc(imgSrc);
  };

  // const backgroundImage = bigImgSrc || product.image2;

  return (
    <>
      <PageTitle title={"Product Details"} />
      <DetailCardSection handleColClick={handleColClick} bigImgSrc={bigImgSrc} product={product}/>
      <TabsSection />
      <DetailReletad product={product} productId={productId} />
    </>
  );
}

export default ProductDetail;

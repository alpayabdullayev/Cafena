import React, { useContext, useEffect,useState } from 'react'
import { BasketContext } from '../../context/BasketContext';
import "./index.scss"

const DetailReletad = ({product,productId}) => {

  const [relatedProducts, setRelatedProducts] = useState([]);
  const {handleBasket} = useContext 
  (BasketContext)


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
        if (product.categoryID) {
          getRelatedProducts(product.categoryID);
        }
      }, [product.categoryID, productId]);
  return (
   <>
      <section id="detailReletad">
      <div className="container">
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="related-products-list row ">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="related-product col-xs-7 col-lg-4 col-md-5 col-12">
              <div className=" relatedCol ">
                <div className="cardFilter ">
                  <div className="productImgFilter">
                    <img className="img1filter" src={relatedProduct.image2} alt="" />
                    <img className="img2filter" src={relatedProduct.image} alt="" />
                  </div>

                  <div>
                    <p>{relatedProduct.name}</p>
                    <h2>{relatedProduct.name}</h2>
                    <p>price ${relatedProduct.name}</p>
                    <button onClick={()=>handleBasket(relatedProduct)}>addbasket</button>
                   
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      </section>
   </>
  )
}

export default DetailReletad
import React from "react";

const BasketCard = ({ image, name, category,rating,count,item }) => {
  return (
    <>
      <div className="cardProduct">
        <div className="cardContent">
          <div className="cardImg">
            <img src={image} alt="" />
          </div>
          <div className="cardBody">
            <button>Wishlist</button>
            <h1>{name}</h1>
            <p>{category}</p>
            <p>{rating}</p>
            <p>{count}</p>
            <p>
                total: {item.count*item.price.discounted} 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketCard;

import React, { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import "./index.scss";
import { BasketContext } from "../../context/BasketContext";
import BasketCard from "../BasketCard";
import { v4 as uuidv4 } from 'uuid';

const BasketSideBar = () => {
  const { active } = useContext(MainContext);
  const {countBasket, basket } = useContext(BasketContext);


  return (
    <>
      <div className={`sidebar ${active ? "active" : ""}`}>
        <div className="basket-container">
          <div className="basketTitle">
            <h1>BASKET</h1> 
            <p>BASKET COUNT: {countBasket}</p>

          </div>

          <div>
            {basket.map((item) => (
              
                <BasketCard key={uuidv4()} {...item} item={item} />
              
            ))}

            <p style={{ color: "black" }}>
              SUBTOTAL:{" "}
              {basket.reduce(
                (total, item) => total + item.count * item.price.discounted,
                0
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketSideBar;

import React, { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import "./index.scss";
import { BasketContext } from "../../context/BasketContext";
import BasketCard from "../BasketCard";

const BasketSideBar = () => {
  const { active } = useContext(MainContext);
  const { basket } = useContext(BasketContext);

  return (
    <>
      <div className={`sidebar ${active ? "active" : ""}`}>
        <div className="basket-container">
          <div className="basketTitle">
            <h1>BASKET</h1>
          </div>

          <div>
            {basket.map((item) => (
              <>
                <BasketCard {...item} item={item} />
              </>
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

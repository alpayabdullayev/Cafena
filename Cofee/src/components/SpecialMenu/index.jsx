import React, { useContext, useState } from "react";
import Title from "../Title";
import { v4 as uuidv4 } from "uuid";
import "./index.scss";
import SpecialCard from "../SpecialCard";
import useFetch from "../../hooks/useFetch";
import { MainContext } from "../../context/MainContext";
import { FilterContext } from "../../context/FilterContext";

const SpecialMenu = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { category, updateCategory } = useContext(FilterContext);

  const url = "  http://localhost:3000/products";

  const Callback = (data) => {
    if (!status) {
      console.log(data);
      setData(data);
      setStatus(true);
      setIsLoading(false);
    }
  };

  useFetch(url, Callback);

  const handleCategoryClick = (e) => {
    updateCategory(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <section id="specialMenu">
        <div className="container">
          <Title title={"SPECIAL MENU"} titleh1={"CAFENA POPULAR MENU"} />

          <div className="specialCategoryButtons">
            <button onClick={(e) => handleCategoryClick(e)} value="ALL">
              ALL
            </button>

            <button onClick={(e) => handleCategoryClick(e)} value="1">
              CHOCOLATE
            </button>
            <button onClick={(e) => handleCategoryClick(e)} value="2">
              COFFE
            </button>
            <button onClick={(e) => handleCategoryClick(e)} value="3">
              sandwiches
            </button>
            <button onClick={(e) => handleCategoryClick(e)} value="4">
              SWETS
            </button>
            <button onClick={(e) => handleCategoryClick(e)} value="5">
              BLACK TEA
            </button>
            <button onClick={(e) => handleCategoryClick(e)} value="6">
              GREEN TEA
            </button>
          </div>

          <div className="specialMenuCards ">
          {isLoading ? (
              <p>Yükleniyor...</p>
            ) : (
              data &&
              data
                .filter(
                  (item) =>
                    category === "ALL" ||
                    (Array.isArray(item.categoryID) && item.categoryID.includes(parseInt(category)))
                )
                .map((item) => (
                  <SpecialCard
                    className={`cardsMenu `}
                    style={{
                      opacity: item ? 1 : 0,
                      transition: item ? "all 0.5s" : "all 0.5s",
                      visibility: item ? "visible" : "hidden",
                      
                    }}
                    key={uuidv4()}
                    {...item}
                    item={item}
                  />
                ))
            )}
          </div>
        </div>
        <img
          className="img-bg-context"
          src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/menu-shape-1.png"
          alt=""
        />
        <img
          className="img-bg-context-2"
          src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/menu-shape-4.png"
          alt=""
        />
      </section>
    </>
  );
};

export default SpecialMenu;

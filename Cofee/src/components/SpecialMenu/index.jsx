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
  const [selectedDistricts, setSelectedDistricts] = useState([])

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

  const handleCategoryClick = (e,id) => {
    
    selectedDistricts.shift()
    setSelectedDistricts([
      ...selectedDistricts,
        id
      ])
    // if(selectedDistricts){
    //   setSelectedDistricts([])
    // }else{
    //   setSelectedDistricts([
    //     ...selectedDistricts,
    //     id
    // ])
    // }



    updateCategory(e.target.value);
    console.log(e.target.value);
  };
  console.log(selectedDistricts);

const isClicked=(id)=>{
  return selectedDistricts.indexOf(id) !== -1
}

  return (
    <>
      <section id="specialMenu">
        <div className="container">
          <Title title={"SPECIAL MENU"} titleh1={"CAFENA POPULAR MENU"} />

          <div className="specialCategoryButtons">
            <button className={isClicked(1) ? "btnActive" : ""} onClick={(e) => handleCategoryClick(e,1)} value="ALL">
              ALL
            </button>

            <button className={isClicked(2) ? "btnActive" : ""} onClick={(e) => handleCategoryClick(e,2)} value="1">
              CHOCOLATE
            </button>
            <button className={isClicked(3) ? "btnActive" : ""} onClick={(e) => handleCategoryClick(e,3)} value="2">
              COFFE
            </button>
            <button className={isClicked(4) && "btnActive"} onClick={(e) => handleCategoryClick(e,4)} value="3">
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
              <p>Loading...</p>
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

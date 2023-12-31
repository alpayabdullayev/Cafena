import React, { useContext, useState } from "react";
import Title from "../Title";
import { v4 as uuidv4 } from "uuid";
import "./index.scss";
import SpecialCard from "../SpecialCard";
import useFetch from "../../hooks/useFetch";
import { MainContext } from "../../context/MainContext";
import { FilterContext } from "../../context/FilterContext";
import toast, { Toaster } from 'react-hot-toast';
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
          <Toaster />

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
            <button className={isClicked(5) && "btnActive"} onClick={(e) => handleCategoryClick(e,5)} value="4">
              SWETS
            </button>
            <button className={isClicked(6) && "btnActive"} onClick={(e) => handleCategoryClick(e,6)} value="5">
              BLACK TEA
            </button>
            <button className={isClicked(7) && "btnActive"} onClick={(e) => handleCategoryClick(e,7)} value="6">
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

      </section>
    </>
  );
};

export default SpecialMenu;

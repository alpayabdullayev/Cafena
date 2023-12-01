import { useState } from "react";
import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ShopPageFilterContext = createContext();

const ShopPageFilterProvider = ({ children }) => {

  const [category, setCategory] = useState([]);


    const handleCategoryClick = (e) => {
        const clickedCategory = e.target.value;
        const isSelected = category.includes(clickedCategory);
    
        if (isSelected) {
          setCategory(category.filter((category) => category !== clickedCategory));
        } else {
          setCategory([...category, clickedCategory]);
        }
      };

  const data = {
    handleCategoryClick,category,setCategory
  };
  return (
    <>
      <ShopPageFilterContext.Provider value={data}>
        {children}
      </ShopPageFilterContext.Provider>
    </>
  );
};

export default ShopPageFilterProvider;

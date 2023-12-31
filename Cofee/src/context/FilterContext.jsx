import React, { createContext, useState } from "react";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    const [category, setCategory] = useState("ALL")
    const [brand,setBrand] = useState("ALL")

    const updateCategory = (newCategory) => {
        setCategory(newCategory);
      };
      const updateBrand= (newBrand) => {
        setBrand(newBrand);
      };
  const data = {
    category,
    updateCategory,
    setCategory,
    brand,
    updateBrand,
    setBrand
  };

  return (
    <FilterContext.Provider value={data}>{children}</FilterContext.Provider>
  );
};

export default FilterProvider;

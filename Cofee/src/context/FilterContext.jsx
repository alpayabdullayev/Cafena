import React, { createContext, useState } from "react";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    const [category, setCategory] = useState("ALL")

    const updateCategory = (newCategory) => {
        setCategory(newCategory);
      };
  const data = {
    category,
    updateCategory,
    setCategory
  };

  return (
    <FilterContext.Provider value={data}>{children}</FilterContext.Provider>
  );
};

export default FilterProvider;

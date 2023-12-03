import React, { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import "./index.scss"

const FilterSectionBrand = () => {
  const { brand, setBrand } = useContext(FilterContext);

  const handleBrandFilter = (e) => {
    setBrand(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
    
    <div className="brandButtonSection">
        <div className="titleBrand">
            <h1>BRAND</h1>
        </div>
        <div className="CategoryIdButtons">
      <button onClick={(e) => handleBrandFilter(e)} value="ALL">
        ALL
      </button>
      <button onClick={(e) => handleBrandFilter(e)} value="LATTE">
        Latte
      </button>
      <button onClick={(e) => handleBrandFilter(e)} value="CREUSET COFFEE">
        CREUSET COFFEE
      </button>
      <button onClick={(e) => handleBrandFilter(e)} value="CREUSET COCOTTE">
        CREUSET COCOTTE
      </button>
      <button onClick={(e) => handleBrandFilter(e)} value="CAPPUCCINO">
        CAPPUCCINO
      </button>
    </div>
    </div>
    </>
  );
};

export default FilterSectionBrand;

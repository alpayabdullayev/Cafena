import React from "react";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import "./index.scss"

const FilterSearch = () => {
  const { handleInputChange, searchValue } = useContext(SearchContext);
  return (
    <>
  <div className="searchWitget">
      <div className="titleSearch">
        <h1>SEARCH HERE</h1>
      </div>
      <div className="inputSearch">
        <input
          type="text"
          onChange={(e) => handleInputChange(e)}
          value={searchValue}
          className="search"
          placeholder="Search..."
        />
      </div>
  </div>

      
    </>
  );
};

export default FilterSearch;

import React, { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { ShopPageFilterContext } from "../../context/ShopPageFilterContext";
import useFetch from "../../hooks/useFetch";
import FilterSectionCategory from "../FilerSectionCategory";
import FilterSearch from "../FilterSearch";
import FilterSectionCard from "../FilterSectionCard";
import "./index.scss";

const FilterSection = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useContext(ShopPageFilterContext);
  const {searchValue} = useContext(SearchContext)

  const url = "  http://localhost:3000/filters";

  const Callback = (data) => {
    if (!status) {
      console.log(data);
      setData(data);
      setStatus(true);
      setIsLoading(false);
    }
  };

  useFetch(url, Callback);



  return (
    <>
      <div id="filterSection">
        <div className="container">
          <div className="sortShowing">
            <div>
              <p>Showing 1–12 of 54 results</p>
            </div>
            <div>
              <button>col4</button>
              <button>col12</button>
              <select name="" id="">
                <option value="">salam</option>
                <option value="">salam</option>
                <option value="">salam</option>
              </select>
            </div>
          </div>
          <div className="filterIsPage">
            <div className="row">
              <div className="col-12 col-md-8 row">

                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  data
                    .filter((item) =>
                      item.name
                        .toLowerCase()
                        .includes(searchValue.toLocaleLowerCase())
                    )
                    .filter((item) => {
                      if (category.length === 0) {
                        return true;
                      }
                      return category.includes(item.categoryId);
                    })
                    .map((item) => (
                      <FilterSectionCard key={item.id} item={item} {...item} />
                    ))
                )}
              </div>
              <div className="col-12 col-md-4">
                <FilterSectionCategory />
                <FilterSearch/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;

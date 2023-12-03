import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { ShopPageFilterContext } from "../../context/ShopPageFilterContext";
import useFetch from "../../hooks/useFetch";
import FilterSectionCategory from "../FilerSectionCategory";
import FilterSearch from "../FilterSearch";
import FilterSectionCard from "../FilterSectionCard";
import "./index.scss";
import { Toaster } from "react-hot-toast";
import { FilterContext } from "../../context/FilterContext";
import FilterSectionBrand from "../FilterSectionBrand";
import { Slider } from "antd";
import FiltersTopFour from "../FiltersTopFour";
import FiltersColGrid from "../FiltersColGrid";

const FilterSection = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useContext(ShopPageFilterContext);
  const { searchValue } = useContext(SearchContext);
  const [selectedDistricts, setSelectedDistricts] = useState([]);
  const { brand } = useContext(FilterContext);
  const [priceRange, setPriceRange] = useState([250, 400]);
  const [topFourItems, setTopFourItems] = useState([]);
  const [selectedButton, setSelectedButton] = useState("col-lg-4");

  const url = "  http://localhost:3000/filters";

  const Callback = (data) => {
    if (!status) {
      console.log(data);
      setData(data);
      setStatus(true);
      setIsLoading(false);
      const sortedData = [...data].sort((a, b) => b.rating - a.rating);
      const topFour = sortedData.slice(0, 4);
      setTopFourItems(topFour);
    }
  };

  useFetch(url, Callback);

  const handlePriceChange = (value) => {
    console.log("New price range:", value);
    setPriceRange(value);
  };

  return (
    <>
      <div id="filterSection">
        <Toaster />
        <div className="container">
          <div className="sortShowing">
            <div>
              <p>Showing 1–12 of 54 results</p>
            </div>
            <div>
              <FiltersColGrid setSelectedButton={setSelectedButton} selectedButton={selectedButton}/>
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
                    .filter((item) => brand === "ALL" || item.brand === brand)
                    .filter((item) => {
                      const itemPrice = parseInt(item.price.original, 10);
                      return (
                        itemPrice >= priceRange[0] && itemPrice <= priceRange[1]
                      );
                    })
                    .map((item) => (
                      <FilterSectionCard key={item.id} item={item} selectedButton={selectedButton} {...item} />
                    ))
                )}
              </div>
              <div className="col-12 col-md-4">
                <FilterSearch />
                <FilterSectionCategory />
                <FilterSectionBrand />
                <Slider
                  range
                  draggableTrack
                  defaultValue={[250, 400]}
                  min={250}
                  max={600}
                  step={1}
                  onAfterChange={handlePriceChange}
                />
                <div className="topFour">
                  <div className="topFourTitle">
                    <h1>top Product</h1>
                  </div>
                  {topFourItems.map((item) => (
                    <FiltersTopFour
                      key={item.id}
                      rating={item.rating}
                      image={item.image}
                      name={item.name}
                      priceDiscounted={item.price.discounted}
                      priceOriginal={item.price.original}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;

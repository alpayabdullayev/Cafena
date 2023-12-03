import React from "react";
import FilterSection from "../../components/FilterSection";
import PageTitle from "../../components/PageTitle";
import SearchProvider from "../../context/SearchContext";
import ShopPageFilterProvider from "../../context/ShopPageFilterContext";
import FilterProvider from "../../context/FilterContext";
import Footer from "../../layout/Footer";

function Shop() {
  return (
    <>
      <PageTitle title={"SHOP"} />
      <ShopPageFilterProvider>
        <SearchProvider>
          <FilterProvider>
          <FilterSection />

          </FilterProvider>
        </SearchProvider>
      </ShopPageFilterProvider>
      <Footer/>
    </>
  );
}

export default Shop;

import React from "react";
import FilterSection from "../../components/FilterSection";
import PageTitle from "../../components/PageTitle";
import SearchProvider from "../../context/SearchContext";
import ShopPageFilterProvider from "../../context/ShopPageFilterContext";

function Shop() {
  return (
    <>
      <PageTitle title={"SHOP"} />
      <ShopPageFilterProvider>
        <SearchProvider>
          <FilterSection />
        </SearchProvider>
      </ShopPageFilterProvider>
    </>
  );
}

export default Shop;

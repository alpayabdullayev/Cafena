import React from 'react'
import { Checkbox } from 'antd';
import { useContext } from 'react';
import { ShopPageFilterContext } from '../../context/ShopPageFilterContext';


const FilterSectionCategory = () => {

    const { handleCategoryClick,category} = useContext(ShopPageFilterContext)
  return (
    <div className="filter-items">
              <div className="filter-item">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleCategoryClick(e)}
                    value="1"
                    checked={category.includes("1")}
                  >
                    Burger
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleCategoryClick(e)}
                    value="2"
                    checked={category.includes("2")}
                  >
                    2x PIZZA
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleCategoryClick(e)}
                    value="3"
                    checked={category.includes("3")}
                  >
                    Cold Drinks
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleCategoryClick(e)}
                    value="4"
                    checked={category.includes("4")}
                  >
                    Chicken
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleCategoryClick(e)}
                    value="5"
                    checked={category.includes("5")}
                  >
                    Stuck Dish
                  </Checkbox>
                </div>
              </div>

    </div>
  )
}

export default FilterSectionCategory

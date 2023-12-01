import React from 'react'
import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'

const FilterSearch = () => {

    const {handleInputChange,searchValue} = useContext(SearchContext)
  return (
    <div className="inputSearch">
    <input
      type="text"
      onChange={(e) => handleInputChange(e)}
      value={searchValue}
      className="search"
      placeholder="Search..."
    />
  </div>
  )
}

export default FilterSearch
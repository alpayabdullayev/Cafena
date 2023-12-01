import { createContext, useState } from "react";

export const SearchContext = createContext()


import React from 'react'

const SearchProvider = ({children}) => {

  const [searchValue, setSearchValue] = useState("");


    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
      };

    const data = {
        handleInputChange,searchValue,setSearchValue
    }
  return (
    <>
    <SearchContext.Provider value={data}>
        {children}
    </SearchContext.Provider>
    </>
  )
}

export default SearchProvider
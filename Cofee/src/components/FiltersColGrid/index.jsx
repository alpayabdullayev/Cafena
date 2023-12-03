import React from 'react'
import "./index.scss"
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
const FiltersColGrid = ({ setSelectedButton }) => {
  return (
    <>
    <div>
        <div className='colGridButtons'>
            <button onClick={() => setSelectedButton("col-12 collg12")}><FaBars /> </button>
            <button onClick={() => setSelectedButton("col-12 col-xs-7  col-lg-4 col-md-6 ")}><BsFillGrid3X3GapFill /></button>
        </div>
    </div>
    
    </>
  )
}

export default FiltersColGrid
import React from 'react'
import "./index.scss"
const FiltersColGrid = ({ setSelectedButton }) => {
  return (
    <>
    <div>
        <div className='colGridButtons'>
            <button onClick={() => setSelectedButton("col-12 collg12")}> col12</button>
            <button onClick={() => setSelectedButton("col-12 col-xs-7  col-lg-4 col-md-6 ")}>col-4</button>
        </div>
    </div>
    
    </>
  )
}

export default FiltersColGrid
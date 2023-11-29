import React, { useContext } from 'react'
import "./index.scss"
import { MainContext } from '../../context/MainContext';

const Overlay = () => {
    const { active,handleOverlayClick,activeWishlist } = useContext(MainContext);



  return (

<>
<div className={`overlay ${active? 'active' : ''}`}  onClick={handleOverlayClick}></div>
<div className={`overlay ${activeWishlist? 'active' : ''}`}  onClick={handleOverlayClick}></div>
</>
  )
}

export default Overlay
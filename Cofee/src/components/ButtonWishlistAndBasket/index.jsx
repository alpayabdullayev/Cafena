import React, { useContext } from 'react'
import { MainContext } from '../../context/MainContext';

const ButtonWishlistAndBasket = () => {
    const { basketOpen, wishlistiOpen } = useContext(MainContext);
  return (
    <>
      <button onClick={() => basketOpen()}>Basket</button>
      <button onClick={() => wishlistiOpen()}>Wishlist</button>
    </>
  )
}

export default ButtonWishlistAndBasket
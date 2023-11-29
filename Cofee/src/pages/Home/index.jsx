import React from 'react'
import SpecialMenu from '../../components/SpecialMenu'
import BasketSideBar from '../../components/BasketSideBar'
import WishlistSideBar from '../../components/WishlistSideBar'
import ButtonWishlistAndBasket from '../../components/ButtonWishlistAndBasket'
import FilterProvider from '../../context/FilterContext'

const Home = () => {
  return (
    <div>
      <>
        <ButtonWishlistAndBasket />
        <BasketSideBar />
        <WishlistSideBar />
        <FilterProvider>
        <SpecialMenu />

        </FilterProvider>
      </>
    </div>
  )
}

export default Home

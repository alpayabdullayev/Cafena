import React from 'react'
import SpecialMenu from '../../components/SpecialMenu'
import BasketSideBar from '../../components/BasketSideBar'
import WishlistSideBar from '../../components/WishlistSideBar'
import ButtonWishlistAndBasket from '../../components/ButtonWishlistAndBasket'
import FilterProvider from '../../context/FilterContext'
import Header from '../../components/Header'
import Overlay from '../../components/Overlay'

const Home = () => {
  return (
    <div>
      <>
      <Overlay/>
         <BasketSideBar />
        <WishlistSideBar />
        <Header/>
        <FilterProvider>
        <SpecialMenu />

        </FilterProvider>
      </>
    </div>
  )
}

export default Home

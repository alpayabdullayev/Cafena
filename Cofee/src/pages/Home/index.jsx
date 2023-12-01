import React from "react";
import SpecialMenu from "../../components/SpecialMenu";
import News from "../../components/News";
import BasketSideBar from "../../components/BasketSideBar";
import WishlistSideBar from "../../components/WishlistSideBar";
import ButtonWishlistAndBasket from "../../components/ButtonWishlistAndBasket";
import FilterProvider from "../../context/FilterContext";
import Header from "../../components/Header";
import Overlay from "../../components/Overlay";
import AboutUs from '../../components/AboutUs'
import TopGrade from "../../components/TopGrade";
import Testimonial from "../../components/Testimonial";
import Footer from "../../layout/Footer";
import Years from "../../components/Years";



const Home = () => {
  return (
    <div>
      <>
      <Overlay/>
         <BasketSideBar />
        <WishlistSideBar />
        <Header/>
        <Years/>
        <AboutUs/>
        <FilterProvider>
          <SpecialMenu />
        </FilterProvider>
        <Testimonial/>
        <TopGrade/>
        <News/>
        <Footer/>
      </>
    </div>
  );
};

export default Home;

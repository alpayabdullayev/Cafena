import "./App.css";
import "./assets/scss/main.scss";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/Detail";
import WishlistSideBar from "./components/WishlistSideBar";
import BasketSideBar from "./components/BasketSideBar";
import Overlay from "./components/Overlay";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <>
      <BasketSideBar />
      <WishlistSideBar />
      <Overlay />

      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

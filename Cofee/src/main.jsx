import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainProvider from "./context/MainContext.jsx";
import BasketProvider from "./context/BasketContext.jsx";
import WishlistProvider from "./context/WishlistContext.jsx";
import { FilterContext } from "./context/FilterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <WishlistProvider>
    <BasketProvider>
      <MainProvider>
        <App />
      </MainProvider>
    </BasketProvider>
    </WishlistProvider>
  </React.StrictMode>
);

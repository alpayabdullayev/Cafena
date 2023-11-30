import { createContext, useState } from "react";

export const MainContext = createContext();

const MainProvider = ({ children }) => {
    const [active, setActive] = useState(false);
    const [activeWishlist, setactiveWishlist] = useState(false)
    

    
    const basketOpen = () => {
        setActive(!active);
        setactiveWishlist(false);
      };
      const wishlistiOpen = ()=>{
        setactiveWishlist(!activeWishlist);
        setActive(false);
    }

    const handleOverlayClick = () =>{
      setactiveWishlist(false);
      setActive(false);
    }

    const data = {
       active,setActive,activeWishlist,setactiveWishlist,basketOpen,wishlistiOpen,handleOverlayClick
    }


  return (
    <MainContext.Provider value={data}>
        {children}
    </MainContext.Provider>
  );
};

export default MainProvider;

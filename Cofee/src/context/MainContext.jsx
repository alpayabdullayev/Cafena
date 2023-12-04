import { createContext, useState } from "react";

export const MainContext = createContext();

const MainProvider = ({ children }) => {
    const [active, setActive] = useState(false);
    const [activeWishlist, setactiveWishlist] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    

    
    const basketOpen = () => {
        setActive(!active);
        setactiveWishlist(false);
        setSidebarOpen(false)
      };
      const wishlistiOpen = ()=>{
        setactiveWishlist(!activeWishlist);
        setActive(false);
        setSidebarOpen(false)
    }

    const handleOverlayClick = () =>{
      setactiveWishlist(false);
      setActive(false);
      setSidebarOpen(false)
    }
    const handleSidebarOpen = ()=>{
      setSidebarOpen(!sidebarOpen)
      setActive(false)
      setactiveWishlist(false)
    }
    const data = {
       active,setActive,activeWishlist,setactiveWishlist,basketOpen,wishlistiOpen,handleOverlayClick,sidebarOpen,setSidebarOpen,handleSidebarOpen
    }


  return (
    <MainContext.Provider value={data}>
        {children}
    </MainContext.Provider>
  );
};

export default MainProvider;

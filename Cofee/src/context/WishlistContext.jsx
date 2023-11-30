import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import toast, { Toaster } from 'react-hot-toast'



export const WishlistContext = createContext()



const WishlistProvider = ({children}) => {

    const [wishlist, setWishlist] = useLocalStorage("wishlist")
    const [heart, setHeart] = useLocalStorage("heart")


    function toggleHeart(item) {
        const isItemInWishlist = wishlist.find(x => x.id === item.id);
    
        if (isItemInWishlist) {
          toast.error('whislist Remove.',{position: 'bottom-left', 
          })
          const newWishlist = wishlist.filter((x) => x.id !== item.id);
 
          setWishlist(newWishlist);
        } else {
          toast.success('wishlist add .',{position: 'bottom-left'})

          setWishlist([...wishlist, { ...item }]);

        }

    
        const isItemInHeartList = heart.includes(item.id);
        if (isItemInHeartList) {
            setHeart(heart.filter((id) => id !== item.id));

        } else {
            setHeart([...heart, item.id]);
            
        }
      }
    

    const data = {
        wishlist, setWishlist,heart,setHeart,toggleHeart
    }


  return (
    <>
    <WishlistContext.Provider value={data}>
        {children}
    </WishlistContext.Provider>
    </>
  )
}

export default WishlistProvider
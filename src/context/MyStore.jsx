import { createContext, useEffect, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [deals, setDeals] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [showTypeData, setShowTypeData] = useState(" ");
  const [rate, setRate] = useState(0);
  const [sortBy, setSortBy] = useState("featured");
  const [user, setUser] = useState([]);
  const [loggedUser, setLoggedUser] = useState();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(cartItems);
  }, []);
  useEffect(() => {
    let favItems = JSON.parse(localStorage.getItem("favItems")) || [];
    setFavorite(favItems);
  }, []);

  const increaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );

    setCart(updatedCart);
  };

  const decreaseQty = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  return (
    <MyStore.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        isCartOpen,
        setIsCartOpen,
        setDeals,
        deals,
        isShopOpen,
        setIsShopOpen,
        showTypeData,
        setShowTypeData,
        rate,
        setRate,
        sortBy,
        setSortBy,
        user,
        setUser,
        setLoggedUser,
        open,
        setOpen,
        favorite,
        setFavorite,
        increaseQty,
        decreaseQty,
        order, setOrder,
         search,
    setSearch,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};

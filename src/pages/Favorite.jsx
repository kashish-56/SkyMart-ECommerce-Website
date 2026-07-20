import { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { MyStore } from "../context/MyStore";
import { NavLink } from "react-router";

export default function Favorite() {

  let {favorite, setFavorite,setOpen,cart,setCart} = useContext(MyStore);

  useEffect(() => {
    setFavorite(
      JSON.parse(localStorage.getItem("favItems")) || []
    );
  }, []);

  const removeFavorite = (id) => {
    const updated = favorite.filter(item => item.id !== id);

    setFavorite(updated);

    localStorage.setItem(
      "favItems",
      JSON.stringify(updated)
    );
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f6f3ec] px-5 py-10 md:px-10 lg:px-16" onClick={()=>setOpen(false)}>

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-bold tracking-[0.15em] text-[#ed6b3b]">
            YOUR FAVORITES
          </p>

          <div className="mt-3 flex items-center justify-between">

            <h1 className="text-5xl font-semibold text-[#1e1d1a]">
              Wishlist
            </h1>

            <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold shadow">
              {favorite.length} Items
            </span>

          </div>

          {favorite.length === 0 ? (

            <div className="mt-20 flex flex-col items-center">

              <FaHeart
                size={70}
                className="text-[#ed6b3b]/30"
              />

              <h2 className="mt-6 text-3xl font-semibold">
                Your wishlist is empty
              </h2>

              <p className="mt-3 text-[#716d66]">
                Save products you love for later.
              </p>

              <NavLink to={"/shop"}>
                <Button className="mt-8 rounded-xl">
                Continue Shopping
              </Button>
              </NavLink>

            </div>

          ) : (

          <div className="mt-8 h-170 overflow-y-auto pr-2">
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
    {favorite.map((item) => {

const isInCart = cart.some((val) => val.id === item.id);

return (
    <div
        key={item.id}
        className="overflow-hidden rounded-2xl border border-[#ded9cf] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      >
        {/* Image */}
        <div className="relative">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="h-36 w-full object-cover"
          />

          <button
            onClick={() => removeFavorite(item.id)}
            className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#fde7de] text-[#ed6b3b]"
          >
            <FaHeart size={14} />
          </button>
        </div>

        {/* Content */}
        <div className="p-3">
          <p className="truncate text-[10px] uppercase tracking-wide text-[#716d66]">
            {item.category}
          </p>

          <h3 className="mt-1 line-clamp-2 h-10 text-sm font-semibold text-[#1e1d1a]">
            {item.title}
          </h3>

          <div className="mt-2 flex items-center justify-between">
            <span className="text-base font-bold">
              ${item.price}
            </span>

            <span className="rounded-full bg-[#f6f3ec] px-2 py-0.5 text-[10px]">
              ⭐ {item.rating}
            </span>
          </div>


          <Button 
           onClick={() => {
             
             if (!isInCart){
                   let cartItems = [...cart, {...item,quantity:1}];
              setCart(cartItems);
              localStorage.setItem('cartItems',JSON.stringify(cartItems));
              }
            }}
          variant="outline"
                    className={`w-full rounded-xl mt-3 border border-[#1e1d1a] py-2! text-[11px] font-bold transition-all duration-200 hover:bg-[#1e1d1a] hover:text-white ${
  isInCart
    ? "bg-green-600! text-white border-green-600 hover:bg-green-700"
    : ""
}`}
                    >
                      {isInCart ? "Added" :"Add To Cart"}
                    </Button>
        </div>
      </div>
)
    })}
  </div>
</div>

          )}

        </div>

      </main>

      <Footer />
    </>
  );
}
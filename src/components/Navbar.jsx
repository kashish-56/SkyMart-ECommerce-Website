import { useContext, useState } from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router";
import { MyStore } from "../context/MyStore";
import UserProfile from "../pages/UserProfile";

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {setIsShopOpen,cart,favorite} = useContext(MyStore);

  let count = 0;
  const countProducts = cart.forEach((element) => {
    count++;
  });
  let countFav = 0;
  const countFavProducts = favorite.forEach((element) => {
    countFav++;
  });

  return (
    <>
      <div className="bg-[#1e1d1a] py-1.5 text-center text-[10px] tracking-wide text-white sm:py-2 sm:text-xs">
        Free delivery on orders over $50
        <span className="px-2 text-amber-300 sm:px-3">•</span>
        New arrivals every week
      </div>

      <header className="sticky top-0 z-50 border-b border-[#ded9cf] bg-[#f6f3ec]">
        <div className="flex min-h-18 items-center gap-3 px-4 sm:px-5 md:px-12">
          <a href="#top" className="text-2xl font-bold tracking-tight mr-4">
            sky<span className="font-serif italic text-[#ed6b3b]">mart</span>
          </a>

          <nav className="hidden gap-6 text-sm font-semibold md:flex">
            <NavLink to={'/'} onClick={()=>setIsShopOpen(false)}>Home</NavLink>
            <NavLink to={'/shop'} onClick={()=>setIsShopOpen(true)}>Shop</NavLink>
            <NavLink to={'/deals'}>Deals</NavLink>
            <NavLink to={'/category'}>Categories</NavLink>

          </nav>

          {/* Desktop search */}
          <div className="hidden flex-1 md:block">
            <SearchBar />
          </div>
          <UserProfile />

          {/* Always visible: favorite + cart */}
          <div className="ml-auto flex items-center gap-1 sm:gap-2">
           <NavLink to={'/favorite'}>
             <button 
              className="relative grid h-10 w-10 place-items-center text-3xl sm:h-12 sm:w-12 sm:text-3xl! leading-none!"
              aria-label="Favorites"
            >
              ♡
              <span className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-[#ed6b3b] px-1 text-[10px] text-white sm:h-5 sm:min-w-5 sm:text-xs">
                {countFav}
              </span>
            </button>
           </NavLink>

            <NavLink to={'/cart'}>
              <button
              className="whitespace-nowrap border! border-solid! border-[#1e1d1a]! px-1.5 py-1.5 text-xs font-semibold sm:px-3 sm:py-2 sm:text-sm"
              aria-label="Shopping cart"
            >
              <span className="hidden sm:inline">Bag </span>
              🛒
              <span className="ml-0.5 rounded-full bg-[#ed6b3b] px-1 py-0.8 text-[9px] text-white sm:ml-1 sm:px-1.5 sm:text-[15px]">
                {count}
              </span>
            </button>
            </NavLink>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-1 text-xl sm:text-2xl md:hidden"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile search: always visible */}
        <div className="border-t border-[#ded9cf] px-4 py-3 md:hidden">
          <SearchBar />
        </div>

        {/* Mobile navigation: opens after clicking ☰ */}
        {isMenuOpen && (
          <nav className="border-t border-[#ded9cf] bg-[#f6f3ec] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-semibold">
              <NavLink to={'/'} onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to={'/shop'} onClick={() => setIsMenuOpen(false)}>
                Shop
              </NavLink>
              <NavLink to={'/deals'} onClick={() => setIsMenuOpen(false)}>
                Deals
              </NavLink>
              <NavLink to={'/category'} onClick={() => setIsMenuOpen(false)}>
                Categories
              </NavLink>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

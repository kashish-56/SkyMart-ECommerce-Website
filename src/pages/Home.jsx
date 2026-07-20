import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import Button from "../components/Button";
import { useContext } from "react";
import { MyStore } from "../context/MyStore";
import { Navigate, NavLink, useNavigate } from "react-router";
import { categories } from "../data/categories";
import AppRoutes from "../routes/AppRoutes";
import FilterTop from "../components/FilterTop";
import FilterAside from "../components/FilterAside";

const categoryColors = [
  "bg-[#d4ddd1]",
  "bg-[#eed3bd]",
  "bg-[#d4d0e9]",
  "bg-[#f1d96c]",
  "bg-[#d0e5e3]",
];

export default function Home() {
  let { products,setIsShopOpen,setOpen } = useContext(MyStore);
  let navigate = useNavigate();
  return (
    <>
      <Navbar />

      <main id="top" className="bg-[#f6f3ec] text-[#1e1d1a]" onClick={()=>setOpen(false)} >
        <Hero />
        {/* Categories */}
        <section
          id="categories"
          className="px-5 py-16 md:px-10 lg:px-16 lg:py-24"
        >
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[11px] font-bold tracking-[0.14em]">
                BROWSE BY MOOD
              </p>

              <h2 className="text-4xl font-medium tracking-tighter md:text-5xl">
                Find your thing
              </h2>
            </div>

            <NavLink to={"/shop"}>
              <button
              className="border-b border-current pb-1 text-sm font-bold transition hover:text-[#ed6b3b]"
            >
              View all →
            </button>
            </NavLink>
          </div>

          <div className="grid grid-cols-3 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((c, index) => (
              <CategoryCard
                key={c.title}
                {...c}
                bg={categoryColors[index % categoryColors.length]}
              />
            ))}
          </div>
        </section>

        {/* Deal Banner */}
        <section
          id="deals"
          className="mx-5 flex flex-col items-center justify-between gap-10 overflow-hidden bg-[#356c68] px-8 py-12 text-white md:mx-10 md:flex-row lg:mx-16 lg:px-16 lg:py-16"
        >
          <div>
            <p className="mb-3 text-[11px] font-bold tracking-[0.14em]">
              LIMITED TIME
            </p>

            <h2 className="text-4xl font-medium leading-none tracking-tighter md:text-6xl">
              Small luxuries,
              <br />
              <em className="font-serif font-semibold">big savings.</em>
            </h2>

            <p className="mt-5 text-[#d6e5e3]">
              Up to 30% off selected beauty, home and tech finds.
            </p>

           <NavLink to={"/deals"}>
             <button
              className="mt-6 inline-block border-b border-current pb-1 text-sm font-bold hover:text-[#f4bb48]"
            >
              Shop the edit →
            </button>
           </NavLink>
          </div>

          <div className="flex h-40 w-40 rotate-12 flex-col items-center justify-center rounded-full bg-[#f4bb48] text-center font-bold text-[#1e1d1a]">
            <span>UP</span>
            <span>TO</span>

            <strong className="text-5xl leading-none">30%</strong>

            <span>OFF</span>
          </div>
        </section>

        {/* Shop */}
        <section id="shop" className="px-5 pb-20 pt-24 md:px-10 lg:px-16">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[11px] font-bold tracking-[0.14em]">
                THE SKYMART EDIT
              </p>

              <h2 className="text-4xl font-medium tracking-tighter md:text-5xl">
                Made to be loved
              </h2>
            </div>

            <p className="text-sm text-[#716d66]">{products.length} products</p>
          </div>

          <FilterTop />

         <div className="mt-6 grid grid-cols-[70px_1fr] sm:grid-cols-[90px_1fr] md:grid-cols-[140px_1fr] lg:grid-cols-[205px_1fr] gap-4">
  <FilterAside />
  <ProductGrid />
</div>


          <div className="mt-16 flex justify-center">
            <NavLink to={'/shop'} onClick={()=> setIsShopOpen(true)}>
              <Button variant="outline">Load more</Button>
            </NavLink>
          </div>
        </section>

        <Stats />
      </main>

      <Footer />
    </>
  );
}

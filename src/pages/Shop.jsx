import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import { useContext } from "react";
import { MyStore } from "../context/MyStore";
import FilterAside from "../components/FilterAside";
import FilterTop from "../components/FilterTop";

export default function Shop() {
  let {products,setOpen} = useContext(MyStore);
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f6f3ec] px-5 pt-6 pb-16 md:px-10 lg:px-16 lg:pt-10 lg:pb-24" onClick={()=>setOpen(false)}>
        <div className="mx-auto max-w-7xl">

          <p className="mb-3 text-[11px] font-bold tracking-[0.14em] text-[#ed6b3b]">
            ALL PRODUCTS
          </p>

          <h1 className="mb-12 text-5xl font-medium tracking-tighter text-[#1e1d1a] md:text-6xl">
            Shop the collection
          </h1>

         <FilterTop />

          <div className="mt-6 grid grid-cols-[70px_1fr] sm:grid-cols-[90px_1fr] md:grid-cols-[140px_1fr] lg:grid-cols-[205px_1fr] gap-4">
  <FilterAside />
  <ProductGrid />
</div>
        </div>
      </main>

      <Footer />
    </>
  );
}
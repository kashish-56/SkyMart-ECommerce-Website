import React, { useContext, useState } from 'react'
import { MyStore } from '../context/MyStore'

const FilterTop = () => {
    const [active, setActive] = useState(" ")
   let {setShowTypeData, setSortBy, sortBy} =  useContext(MyStore);
  return (
    <div>
          <div className="flex flex-wrap items-center gap-4 border-y border-[#ded9cf] py-4">
            <button className="border-r border-[#ded9cf] pr-4 text-sm font-bold">
              Filters ☷
            </button>

            <div className="hidden gap-2 overflow-auto md:flex">
              <button className="rounded-full bg-[#1e1d1a] px-4 py-2 text-xs text-white"
              onClick={()=> {
                setShowTypeData(" ");
                setActive(' ')
              }}>
                All products
              </button>

              <button className={`rounded-full border border-[#ded9cf] px-4 py-2 text-xs
              ${active === "beauty"? "bg-[#ed6b3b] text-white" : " " }`}
              onClick={()=> {
                setShowTypeData('beauty');
                setActive('beauty')
              }}>
                Beauty
              </button>
              <button className={`rounded-full border border-[#ded9cf] px-4 py-2 text-xs
              ${active === "fragrances"? "bg-[#ed6b3b] text-white" : " " }`}
              onClick={()=> {
                setShowTypeData('fragrances');
                setActive('fragrances');
              }}>
                Fragrances
              </button>
              <button className={`rounded-full border border-[#ded9cf] px-4 py-2 text-xs
              ${active === "home-decoration"? "bg-[#ed6b3b] text-white" : " " }`}
              onClick={()=> {
                setShowTypeData('home-decoration');
                setActive('home-decoration');

              }}>
                Home Decoration
              </button>
              <button className={`rounded-full border border-[#ded9cf] px-4 py-2 text-xs
              ${active === "mobile-accessories"? "bg-[#ed6b3b] text-white" : " " }`}
              onClick={()=> {
                setShowTypeData('mobile-accessories');
                setActive('mobile-accessories');

              }}>
                Electronics
              </button>
              <button className={`rounded-full border border-[#ded9cf] px-4 py-2 text-xs
              ${active === "groceries"? "bg-[#ed6b3b] text-white" : " " }`}
              onClick={()=> {
                setShowTypeData('groceries');
                setActive('groceries');
              }}>
                Groceries
              </button>

            </div>

            <label className="ml-auto text-xs">
              Sort{" "}
             <select
  className="bg-transparent font-bold outline-none"
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
>
  <option value="featured">Featured</option>
  <option value="low-high">Price: low to high</option>
  <option value="high-low">Price: high to low</option>
  <option value="top-rated">Top rated</option>
</select>
            </label>
          </div>
    </div>
  )
}

export default FilterTop
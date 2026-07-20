import React, { useContext, useState } from "react";
import { MyStore } from "../context/MyStore";

const FilterAside = () => {
  const [refresh, setRefresh] = useState({
    beauty: false,
    fragrances: false,
    groceries: false,
    skincare: false,
    furniture: false,
    homedecoration: false,
    kitchenaccessories: false,
    laptops: false,
    mensshirts: false,
    mensshoes: false,
    menswatches: false,
    tops: false,
    womensbags: false,
    womensdresses: false,
    womensjewellery: false,
    womensshoes: false,
    womenswatches: false,
    mobileaccessories: false,
    motorcycle: false,
    smartphones: false,
    sportsaccessories: false,
    sunglasses: false,
    tablets: false,
    vehicle: false,
    four: false,
    three: false,
  });
  const { setShowTypeData , setRate} = useContext(MyStore);
  return (
    <aside className="block text-[10px] sm:text-xs md:text-sm">
      <div className="flex items-center justify-between border-b border-[#ded9cf] pb-4">
        <strong>Filters</strong>

        <button
          className="text-xs underline"
          onClick={() => {
            setShowTypeData(" ");
            setRate(0);
            setRefresh({
              beauty: false,
              fragrances: false,
              groceries: false,
              skincare: false,
              furniture: false,
              homedecoration: false,
              kitchenaccessories: false,
              laptops: false,
              mensshirts: false,
              mensshoes: false,
              menswatches: false,
              tops: false,
              womensbags: false,
              womensdresses: false,
              womensjewellery: false,
              womensshoes: false,
              womenswatches: false,
              mobileaccessories: false,
              motorcycle: false,
              smartphones: false,
              sportsaccessories: false,
              sunglasses: false,
              tablets: false,
              vehicle: false,
              four: false,
              three: false,
            });
          }}
        >
          Clear all
        </button>
      </div>

      <div className="border-b border-[#ded9cf] py-5">
        <strong className="mb-3 block text-sm">Category</strong>

        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.beauty}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "beauty" : " ");
              setRefresh((prev) => ({
                ...prev,
                beauty: e.target.checked,
              }));
            }}
          />
          Beauty & care
        </label>
        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.fragrances}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "fragrances" : " ");
              setRefresh((prev) => ({
                ...prev,
                fragrances: e.target.checked,
              }));
            }}
          />
          Fragrances
        </label>

        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.skincare}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "skin-care" : " ");
              setRefresh((prev) => ({
                ...prev,
                skincare: e.target.checked,
              }));
            }}
          />
          Skin Care
        </label>

        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.furniture}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "furniture" : " ");
              setRefresh((prev) => ({
                ...prev,
                furniture: e.target.checked,
              }));
            }}
          />
          Furniture
        </label>
        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.groceries}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "groceries" : " ");
              setRefresh((prev) => ({
                ...prev,
                groceries: e.target.checked,
              }));
            }}
          />
          Groceries
        </label>
        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.homedecoration}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "home-decoration" : " ");
              setRefresh((prev) => ({
                ...prev,
                homedecoration: e.target.checked,
              }));
            }}
          />
          Home Decoration
        </label>
        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.kitchenaccessories}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "kitchen-accessories" : " ");
              setRefresh((prev) => ({
                ...prev,
                kitchenaccessories: e.target.checked,
              }));
            }}
          />
          Kitchen Accessories
        </label>
        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.laptops}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "laptops" : " ");
              setRefresh((prev) => ({
                ...prev,
                laptops: e.target.checked,
              }));
            }}
          />
          Laptops
        </label>
        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.mensshirts}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "mens-shirts" : " ");
              setRefresh((prev) => ({
                ...prev,
                mensshirts: e.target.checked,
              }));
            }}
          />
          Mens Shirts
        </label>
        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.mensshoes}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "mens-shoes" : " ");
              setRefresh((prev) => ({
                ...prev,
                mensshoes: e.target.checked,
              }));
            }}
          />
          Mens Shoes
        </label>
        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.menswatches}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "mens-watches" : " ");
              setRefresh((prev) => ({
                ...prev,
                menswatches: e.target.checked,
              }));
            }}
          />
          Mens Watches
        </label>
        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.tops}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "tops" : " ");
              setRefresh((prev) => ({
                ...prev,
                tops: e.target.checked,
              }));
            }}
          />
          Tops
        </label>

        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.womensbags}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "womens-bags" : " ");
              setRefresh((prev) => ({
                ...prev,
                womensbags: e.target.checked,
              }));
            }}
          />
          Womens Bags
        </label>
        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.womensdresses}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "womens-dresses" : " ");
              setRefresh((prev) => ({
                ...prev,
                womensdresses: e.target.checked,
              }));
            }}
          />
          Womens Dresses
        </label>
        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.womensjewellery}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "womens-jewellery" : " ");
              setRefresh((prev) => ({
                ...prev,
                womensjewellery: e.target.checked,
              }));
            }}
          />
          Womens Jewellery
        </label>
        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.womensshoes}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "womens-shoes" : " ");
              setRefresh((prev) => ({
                ...prev,
                womensshoes: e.target.checked,
              }));
            }}
          />
          Womens Shoes
        </label>
        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.womenswatches}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "womens-watches" : " ");
              setRefresh((prev) => ({
                ...prev,
                womenswatches: e.target.checked,
              }));
            }}
          />
          Womens Watches
        </label>

        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.mobileaccessories}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "mobile-accessories" : " ");
              setRefresh((prev) => ({
                ...prev,
                mobileaccessories: e.target.checked,
              }));
            }}
          />
          Mobile Accessories
        </label>

        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.motorcycle}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "motorcycle" : " ");
              setRefresh((prev) => ({
                ...prev,
                motorcycle: e.target.checked,
              }));
            }}
          />
          Motorcycle
        </label>

        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.smartphones}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "smartphones" : " ");
              setRefresh((prev) => ({
                ...prev,
                smartphones: e.target.checked,
              }));
            }}
          />
          Smartphones
        </label>
        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.sportsaccessories}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "sports-accessories" : " ");
              setRefresh((prev) => ({
                ...prev,
                sportsaccessories: e.target.checked,
              }));
            }}
          />
          Sports Accessories
        </label>
        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.sunglasses}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "sunglasses" : " ");
              setRefresh((prev) => ({
                ...prev,
                sunglasses: e.target.checked,
              }));
            }}
          />
          Sunglasses
        </label>
        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.tablets}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "tablets" : " ");
              setRefresh((prev) => ({
                ...prev,
                tablets: e.target.checked,
              }));
            }}
          />
          Tablets
        </label>

        <label className=" flex items-center gap-2 text-sm text-[#716d66]">
          <input
            type="checkbox"
            className="accent-[#ed6b3b]"
            checked={refresh.vehicle}
            onChange={(e) => {
              setShowTypeData(e.target.checked ? "vehicle" : " ");
              setRefresh((prev) => ({
                ...prev,
                vehicle: e.target.checked,
              }));
            }}
          />
          Vehicle
        </label>
      </div>

      <div className="py-5">
        <strong className="mb-3 block text-sm">Rating</strong>

        <label className="mb-2 flex items-center gap-2 text-sm text-[#716d66]">
          <input type="checkbox" className="accent-[#ed6b3b]" checked={refresh.four} onChange={(e) => {
            setRate(e.target.checked ? 4 : 0);
            setRefresh((prev) => ({
              ...prev,
              four: e.target.checked,
            }));
          }}/>4 stars & up
        </label>

        <label className="flex items-center gap-2 text-sm text-[#716d66]">
          <input type="checkbox" className="accent-[#ed6b3b]" checked={refresh.three} onChange={(e) => {
            setRate(e.target.checked ? 3 : 0);
            setRefresh((prev) => ({
              ...prev,
              three: e.target.checked,
            }));
          }}/>3 stars & up
        </label>
      </div>
    </aside>
  );
};

export default FilterAside;

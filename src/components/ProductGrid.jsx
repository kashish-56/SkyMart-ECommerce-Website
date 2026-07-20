import React from "react";
import { useContext } from "react";
import { MyStore } from "../context/MyStore";
import ProductCard from "./ProductCard";
// import Products from '../data/Products'

const ProductGrid = () => {
  <products />;
  const { products, isShopOpen, showTypeData, rate, sortBy ,search} =
    useContext(MyStore);
  // console.log(showTypeData);
  console.log(rate);
  console.log(sortBy);
  // console.log("Products length:", products.length);
  // console.log("Shop state:", isShopOpen);
  const filteredProducts = products.filter((p) => {
  const matchesCategory =
    showTypeData === " " || p.category === showTypeData;

  const matchesRating =
    rate === 0 || p.rating >= rate;

  const matchesSearch =
    search.trim() === "" ||
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase());

  return (
    matchesCategory &&
    matchesRating &&
    matchesSearch
  );
});

  const sortedProducts = [...filteredProducts];

  switch (sortBy) {
    case "low-high":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;

    case "high-low":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;

    case "top-rated":
      sortedProducts.sort((a, b) => b.rating - a.rating);
      break;

    default:
      break;
  }

  // console.log(sortedProducts);
// console.log(sortedProducts.length);
  

 return (

  
  sortedProducts.length === 0 ? (
    <div className="flex h-[40vh] flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          No Products Found
        </h2>

        <p className="mt-3 text-lg text-gray-500">
          Try searching with another keyword.
        </p>
      </div>
  ) : (
    <div className="grid grid-cols-2 gap-x-3 gap-y-6 pt-7 md:grid-cols-3 md:gap-x-5 md:gap-y-8">
      {(isShopOpen ? sortedProducts : sortedProducts.slice(0, 9)).map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
);
}

export default ProductGrid;

// {
//   isShopOpen ? (
//     <>
//       {" "}
//       {showTypeData === " " && rate === 0
//         ? products.map((p) => <ProductCard key={p.id} product={p} />)
//         : products
//             .filter(
//               (p) =>
//                 (showTypeData === " " || p.category === showTypeData) &&
//                 (rate === 0 || p.rating >= rate),
//             )
//             .map((p) => <ProductCard key={p.id} product={p} />)}{" "}
//     </>
//   ) : (
//     <>
//       {" "}
//       {showTypeData === " " && rate === 0
//         ? products
//             .map((p) => <ProductCard key={p.id} product={p} />)
//             .splice(0, 9)
//         : products
//             .filter(
//               (p) =>
//                 (showTypeData === " " || p.category === showTypeData) &&
//                 (rate === 0 || p.rating >= rate),
//             )
//             .map((p) => <ProductCard key={p.id} product={p} />)
//             .splice(0, 9)}{" "}
//     </>
//   );
// }

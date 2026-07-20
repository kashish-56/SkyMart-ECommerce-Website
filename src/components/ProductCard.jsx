import React, { useContext } from "react";
import Button from "./Button";
import { MyStore } from "../context/MyStore";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {

  let { setCart, setIsCartOpen ,cart,favorite, setFavorite} = useContext(MyStore);
  const isInCart = cart.some((item) => item.id === product.id);
  const deleteItems = cart.filter((item) => item.id !== product.id);
  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;
 const isInFavorite = favorite.some((item) => item.id === product.id);
  const deleteItemsFromFav = favorite.filter((item) => item.id !== product.id);
  let navigate = useNavigate();

  return (
    <article className="group relative min-w-0">
      <button onClick={() => {
             if (!isInFavorite){
                   let favItems = [...favorite, product];
              setFavorite(favItems);
              localStorage.setItem('favItems',JSON.stringify(favItems));
              }
              else{
                setFavorite(deleteItemsFromFav);
              localStorage.setItem('favItems',JSON.stringify(deleteItemsFromFav));
              }
            }}
      className={`absolute right-2 top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full
       bg-white text-xl transition-colors hover:text-[#ed6b3b] ${isInFavorite? "bg-[#fde7de]! text-[#ed6b3b]! " : ""}`}>
        {isInFavorite ? <FaHeart size={18} /> : <FiHeart size={18} />}
      </button>

      <div className="relative aspect-[0.82] cursor-pointer overflow-hidden bg-[#eeeae0]">
        {product.discountPercentage && (
          <span className="absolute left-2 top-2 z-10 bg-white px-2 py-1 text-[14px] text-red-700 font-bold">
            -{Math.round(product.discountPercentage)}%
          </span>
        )}

        <img
        onClick={()=> navigate(`/details/${product.id}`) }
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-cover mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="pt-3">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#716d66]">
          {product.category}
        </p>

        <h3 className="truncate text-sm text-[#1e1d1a]">{product.title}</h3>

        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center">
              <span className="text-sm font-bold text-[#1e1d1a]">
                ${discountedPrice.toFixed(2)}
              </span>

              {product.discountPercentage > 0 && (
                <span className="ml-2 text-[11px] text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>

            <div className="mt-1 text-[11px] text-[#985f00]">
              ★ {product.rating}
            </div>
          </div>

          <Button
            onClick={() => {
             if (!isInCart){
                   let cartItems = [...cart, {...product,quantity:1}];
              setCart(cartItems);
              setIsCartOpen(true);
              localStorage.setItem('cartItems',JSON.stringify(cartItems));
              }
              else{
                setIsCartOpen(false);
                setCart(deleteItems);
              localStorage.setItem('cartItems',JSON.stringify(deleteItems));
              }
            }}
            variant="outline"
            className={`w-full border border-[#1e1d1a] px-3! py-2! text-[11px]! font-bold transition-all
             duration-200 hover:bg-[#1e1d1a] hover:text-white sm:w-auto ${isInCart ? "bg-green-600! text-white! rounded-xl! border-green-600! hover:bg-green-700!" : ""}`}
          >
            {isInCart ? "Added" :"Add +"}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

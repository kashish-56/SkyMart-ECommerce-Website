import { FiClock, FiShoppingCart } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router";
import { useContext } from "react";
import { MyStore } from "../context/MyStore";
import DealData from "../data/DealData";


export default function Deals() {

     let {deals,setCart,setIsCartOpen,setOpen}= useContext(MyStore);
  return (
    <>
    <DealData/>
    <Navbar/>
    <div className="bg-[#f7f3eb] min-h-screen px-5 py-10 sm:px-10" onClick={()=>setOpen(false)}>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-semibold">
          Today's Offers ⚡
        </h1>

        <p className="mt-2 text-gray-500">
          Grab amazing discounts before they are gone.
        </p>
      </div>

     <div
  className="
    rounded-2xl
    bg-[#1e1d1a]
    px-5
    py-4
    text-white

    sm:px-8
    sm:py-5

    flex
    flex-col
    gap-4

    sm:flex-row
    sm:items-center
    sm:justify-between
  "
>
  <div>
    <div className="flex items-center gap-3">

      <h2
        className="
          text-2xl
          sm:text-3xl
          font-bold
        "
      >
        Mega Sale 🔥
      </h2>


      <span
        className="
          rounded-full
          bg-red-500
          px-3
          py-1
          text-xs
          font-semibold
        "
      >
        60% OFF
      </span>

    </div>


    <p
      className="
        mt-1
        text-sm
        text-gray-300
      "
    >
      Up to 60% discount on selected products
    </p>

  </div>

  <div
    className="
      flex
      items-center
      gap-2

      rounded-full
      bg-white/10

      px-5
      py-2

      text-sm
      whitespace-nowrap
    "
  >

    <FiClock size={16}/>

    <span>
      Ends on <strong>10 Aug</strong>
    </span>

  </div>


</div>


     <div
  className="
    mt-10
    grid
    gap-6
    sm:grid-cols-2
    lg:grid-cols-3
  "
>
{
  deals.map((deal) => (
    <div
      key={deal.id}
      className="
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-sm
        transition
        hover:-translate-y-1
        hover:shadow-xl
      "
    >

      <div className="relative">

        <div
  className="
    relative
    h-60
    w-full
    overflow-hidden
    bg-[#f7f3eb]
    flex
    items-center
    justify-center
  "
>
  <img
    src={deal.images[0]}
    alt={deal.title}
    className="
      h-[90%]
      w-[90%]
      object-contain
      mix-blend-multiply
      transition-transform
      duration-300
      group-hover:scale-105
    "
  />
</div>

        <span
          className="
            absolute
            left-4
            top-4

            rounded-full
            bg-red-500

            px-3
            py-1

            text-sm
            font-semibold
            text-white
          "
        >
          {Math.round(deal.discountPercentage)}% OFF
        </span>
        <span
          className="
            absolute
            right-4
            top-4

            rounded-full
            bg-white/90

            px-3
            py-1

            text-xs
            font-medium
            capitalize
          "
        >
          {deal.category}
        </span>

      </div>
      <div className="p-5">


        <h3
          className="
            line-clamp-1
            text-lg
            font-semibold
          "
        >
          {deal.title}
        </h3>


        <p
          className="
            mt-2
            line-clamp-2
            text-sm
            text-gray-500
          "
        >
          {deal.description}
        </p>
        <div
          className="
            mt-3
            flex
            items-center
            gap-2
            text-sm
          "
        >
          <span>
            ⭐ {deal.rating}
          </span>

          <span className="text-gray-400">
            | {deal.stock} left
          </span>
        </div>



        {/* Price */}
        <div
          className="
            mt-4
            flex
            items-center
            gap-3
          "
        >

          <span
            className="
              text-xl
              font-bold
            "
          >
            ${deal.price}
          </span>


          <span
            className="
              text-gray-400
              line-through
            "
          >
            $
            {(
              deal.price /
              (1 - deal.discountPercentage / 100)
            ).toFixed(2)}
          </span>

        </div>


        <button
          onClick={() => {
            setCart((prev) => [...prev, deal]);
            setIsCartOpen(true);
          }}

          className="
            mt-5
            flex
            w-full
            items-center
            justify-center
            gap-2

            bg-[#1e1d1a]

            py-3

            text-white

            transition
            hover:bg-black
            rounded-xl
          "
        >

          <FiShoppingCart size={18}/>

          Add To Cart

        </button>


      </div>


    </div>
  ))
}
</div>


    </div>
    <Footer/>
    </>

  );
}
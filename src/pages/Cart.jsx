import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { MyStore } from "../context/MyStore";
import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";

export default function Cart() {

  const {cart,setCart,setOpen,increaseQty,
        decreaseQty,order, setOrder} = useContext(MyStore)

        console.log(cart)

        const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
  localStorage.setItem("cartItems", JSON.stringify(cart));
}, [cart]);
let navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] bg-[#f6f3ec]px-5 pt-6 pb-16 md:px-10 lg:px-16 lg:pt-10 lg:pb-24" onClick={()=>setOpen(false)}>
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-[11px] font-bold tracking-[0.14em] text-[#ed6b3b]">
            YOUR BAG
          </p>

          <h1 className="mb-16 text-5xl font-medium tracking-tighter text-[#1e1d1a] md:text-6xl">
            Shopping bag
          </h1>

          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-[#ded9cf] bg-white py-20">
              <h2 className="text-3xl font-semibold">Your bag is empty</h2>

              <p className="mt-3 text-[#716d66]">
                Add something lovely when you're ready.
              </p>

              <NavLink to={"/shop"}>
                <Button className="mt-8 rounded-xl" onClick={() => navigate("/shop")}>
                Continue Shopping →
              </Button>
              </NavLink>
            </div>
          ) : (
            <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
              {/* Products */}

              <div className="space-y-5">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-5 rounded-2xl border border-[#ded9cf] bg-white p-5"
                  >
                    <img
                      src={item.thumbnail}
                      className="h-28 w-28 rounded-xl object-cover"
                    />

                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>

                        <p className="mt-2 text-sm text-[#716d66]">
                          {item.category}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4">

  <span className="font-bold text-xl">
    ${(item.price * item.quantity).toFixed(2)}
  </span>

  <div className="flex items-center gap-3 rounded-xl border border-gray-300 px-2 py-1">

    <button
      onClick={() => decreaseQty(item.id)}
      className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-lg font-bold hover:bg-gray-200"
    >
      −
    </button>

    <span className="w-6 text-center font-semibold">
      {item.quantity}
    </span>

    <button
      onClick={() => increaseQty(item.id)}
      className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-lg font-bold hover:bg-gray-200"
    >
      +
    </button>

  </div>

                        <Button onClick={()=>{
                      const deleteItems = cart.filter((val) => val.id !== item.id);
                setCart(deleteItems);
              localStorage.setItem('cartItems',JSON.stringify(deleteItems));
                }} className="rounded-2xl bg-red-700!">Remove</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}

              <div className="h-fit rounded-2xl border border-[#ded9cf] bg-white p-6">
                <h3 className="text-2xl font-semibold">Order Summary</h3>

                <div className="mt-6 flex justify-between">
                  <span>Subtotal</span>

                  <span className="font-bold">
                    $
                    {cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                  </span>
                </div>

                <Button
  onClick={() => {
    const data = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (data.length === 0) return;

    setOrder(data);
    setCart([]);

    localStorage.setItem("cartItems", JSON.stringify([]));
    localStorage.setItem("orders", JSON.stringify(data));

    setOrderSuccess(true);

    // Hide popup after 3 seconds
    setTimeout(() => {
      setOrderSuccess(false);
    }, 3000);
  }}
  className="mt-8 w-full rounded-2xl"
>
  Checkout →
</Button>
              </div>
            </div>
          )}
        </div>

        {orderSuccess && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-3xl shadow-2xl p-8 w-95 text-center animate-bounce">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h2 className="text-2xl font-bold text-gray-800">
        Order Placed!
      </h2>

      <p className="text-gray-500 mt-2">
        Thank you for shopping with us.
      </p>

      <p className="text-sm text-gray-400 mt-1">
        Your order has been placed successfully.
      </p>

      <button
        onClick={() => setOrderSuccess(false)}
        className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl transition"
      >
        Continue Shopping
      </button>
    </div>
  </div>
)}
      </main>

      <Footer />
    </>
  );
}

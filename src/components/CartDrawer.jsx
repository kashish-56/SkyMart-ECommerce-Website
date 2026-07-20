import { useContext, useState } from "react";
import { MyStore } from "../context/MyStore";
import Button from "../components/Button";
import { FiX, FiTrash2, FiPlus, FiMinus } from "react-icons/fi";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, setCart, increaseQty,
        decreaseQty,setOrder } = useContext(MyStore);

         const [orderSuccess, setOrderSuccess] = useState(false);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  );

  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <>
      <div
        onClick={() => setIsCartOpen(false)}
        className={`
          fixed inset-0 z-40
          bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      <aside
        className={`
          fixed right-0 top-0 z-50
          h-screen
          w-80
          sm:w-105
          lg:w-112.5

          bg-[#f7f3eb]
          shadow-2xl

          flex flex-col

          transition-transform
          duration-500
          ease-in-out

          ${isCartOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div
          className="
            border-b border-[#ddd5c8]
            px-4 py-5
            sm:px-6 sm:py-6
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  lg:text-4xl
                  font-semibold
                "
              >
                Your bag
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {totalItems} item{totalItems !== 1 && "s"}
              </p>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="
                rounded-full
                p-2
                hover:bg-gray-200
                transition
              "
            >
              <FiX size={22} />
            </button>
          </div>

          {cart.length > 0 && (
            <button
              className="
                mt-4
                text-sm
                font-medium
                text-red-500
                hover:underline
              "
            >
              Clear cart
            </button>
          )}
        </div>

        <div
          className="
            flex-1
            overflow-y-auto
            px-4 py-5
            sm:px-6
            cart-scroll
          "
        >
          {cart.length === 0 ? (
            <p
              className="
                  mt-20
                  text-center
                  text-gray-500
                "
            >
              Your cart is empty
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="
                    flex
                    gap-3
                    sm:gap-4

                    border-b
                    border-[#ddd5c8]

                    pb-5
                    mb-5
                  "
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="
                      h-20 w-20
                      sm:h-24 sm:w-24

                      rounded-lg
                      object-cover
                    "
                />

                <div className="flex-1 min-w-0">
                  <h3
                    className="
                        font-medium
                        text-sm
                        sm:text-base

                        line-clamp-2
                      "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                        mt-1
                        text-sm
                        text-gray-500
                      "
                  >
                    ${item.price}
                  </p>

                  <div
                    className="
                        mt-3
                        flex
                        items-center
                        gap-3
                      "
                  >
                    <button onClick={()=> decreaseQty(item.id)}
                      className="
                          rounded-full
                          border
                          p-1.5
                          hover:bg-gray-100
                        "
                    >
                      <FiMinus size={14} />
                    </button>

                    <span className="text-sm">{item.quantity || 1}</span>

                    <button onClick={()=> increaseQty(item.id)}
                      className="
                          rounded-full
                          border
                          p-1.5
                          hover:bg-gray-100
                        "
                    >
                      <FiPlus size={14} />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const deleteItems = cart.filter(
                      (val) => val.id !== item.id,
                    );
                    setIsCartOpen(true);
                    setCart(deleteItems);
                    localStorage.setItem(
                      "cartItems",
                      JSON.stringify(deleteItems),
                    );
                  }}
                  className="
                      self-start
                      text-red-500
                      hover:text-red-700
                    "
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        <div
          className="
            border-t
            border-[#ddd5c8]

            px-4 py-5
            sm:p-6
          "
        >
          <div
            className="
              mb-3
              flex
              justify-between
              text-sm
              sm:text-base
            "
          >
            <span className="text-gray-500">Total Items</span>

            <strong>{totalItems}</strong>
          </div>

          <div
            className="
              mb-6
              flex
              justify-between
              text-lg
              sm:text-xl
            "
          >
            <span>Subtotal</span>

            <strong>${subtotal.toFixed(2)}</strong>
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
      </aside>
    </>
  );
}

import { useContext, useState } from "react";
import { FiMinus, FiPlus, FiShoppingCart, FiZap } from "react-icons/fi";
import Button from "./Button";
import { MyStore } from "../context/MyStore";

export default function ProductInfo({ product }) {
  const { cart, setCart,setOrder } = useContext(MyStore);

   const [orderSuccess, setOrderSuccess] = useState(false);

  const [qty, setQty] = useState(1);

  const addToCart = () => {
    const exist = cart.find((item) => item.id === product.id);

    let updatedCart;

    if (exist) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + qty }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: qty }];
    }

    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-10">
      <div className="grid gap-10 rounded-3xl bg-white p-8 shadow-lg lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div>
          <div className="overflow-hidden rounded-3xl bg-[#f8f8f8]">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-137.5 w-full object-contain transition duration-300 hover:scale-105"
            />
          </div>

          <div className="mt-5 flex gap-3">
            {product.images.map((img, index) => (
              <div
                key={index}
                className="rounded-xl border bg-gray-100 p-2"
              >
                <img
                  src={img}
                  alt=""
                  className="h-20 w-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>

          <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
            {product.brand}
          </span>

          <h1 className="mt-4 text-5xl font-bold leading-tight text-gray-900">
            {product.title}
          </h1>

          <p className="mt-3 text-lg capitalize text-gray-500">
            {product.category}
          </p>

          {/* Rating */}
          <div className="mt-5 flex items-center gap-3">
            <span className="text-xl text-yellow-500">
              {"★".repeat(Math.round(product.rating))}
            </span>

            <span className="font-semibold">
              {product.rating} / 5
            </span>
          </div>

          {/* Price */}
          <div className="mt-7 flex items-center gap-4">
            <h2 className="text-4xl font-bold">
              ${product.price}
            </h2>

            <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
              {product.discountPercentage}% OFF
            </span>
          </div>

          {/* Stock */}
          <div className="mt-6 flex flex-wrap gap-3">

            <div className="rounded-xl bg-green-100 px-4 py-2 text-green-700">
              📦 {product.availabilityStatus}
            </div>

            <div className="rounded-xl bg-blue-100 px-4 py-2 text-blue-700">
              Stock : {product.stock}
            </div>

          </div>

          {/* Shipping */}
          <div className="mt-7 grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border p-4">
              <h3 className="font-bold">🚚 Shipping</h3>

              <p className="mt-2 text-sm text-gray-500">
                {product.shippingInformation}
              </p>
            </div>

            <div className="rounded-2xl border p-4">
              <h3 className="font-bold">🛡 Warranty</h3>

              <p className="mt-2 text-sm text-gray-500">
                {product.warrantyInformation}
              </p>
            </div>

          </div>

          {/* Description */}
          <div className="mt-8">
            <h3 className="text-xl font-bold">
              Description
            </h3>

            <p className="mt-3 leading-8 text-gray-600">
              {product.description}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-7 flex flex-wrap gap-3">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-200 px-4 py-2 text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Quantity */}
          <div className="mt-10 flex items-center gap-5">

            <div className="flex items-center rounded-xl border">

              <button
                onClick={() =>
                  qty > 1 && setQty(qty - 1)
                }
                className="p-4"
              >
                <FiMinus />
              </button>

              <span className="w-12 text-center font-bold">
                {qty}
              </span>

              <button
                onClick={() => setQty(qty + 1)}
                className="p-4"
              >
                <FiPlus />
              </button>

            </div>

            <Button
              onClick={addToCart}
              className="flex items-center gap-2 rounded-xl"
            >
              <FiShoppingCart />
              Add To Cart
            </Button>

            <Button 
            onClick={() => {
              setOrderSuccess(true);
              setTimeout(() => {
                setOrderSuccess(false);
              }, 3000);
            }}
             className="flex items-center gap-2 rounded-xl bg-black">
              <FiZap />
              Buy Now
            </Button>

          </div>

          {/* Extra Info */}
          <div className="mt-10 rounded-2xl border p-6">

            <h3 className="mb-4 text-xl font-bold">
              Product Details
            </h3>

            <div className="grid gap-3 text-gray-600">

              <p>
                <strong>SKU :</strong> {product.sku}
              </p>

              <p>
                <strong>Weight :</strong> {product.weight} g
              </p>

              <p>
                <strong>Minimum Order :</strong>{" "}
                {product.minimumOrderQuantity}
              </p>

              <p>
                <strong>Dimensions :</strong>{" "}
                {product.dimensions.width} ×{" "}
                {product.dimensions.height} ×{" "}
                {product.dimensions.depth} cm
              </p>

              <p>
                <strong>Return Policy :</strong>{" "}
                {product.returnPolicy}
              </p>

            </div>

          </div>

        </div>

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
    </section>
  );
}
import { NavLink } from "react-router";

export default function RelatedProducts({
  currentProduct,
  products,
}) {

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === currentProduct.category &&
        item.id !== currentProduct.id
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="mx-auto mt-16 max-w-7xl px-5 pb-16">

      {/* Heading */}
      <div className="mb-8 flex items-end justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            More Products
          </p>

          <h2 className="mt-2 text-4xl font-bold text-gray-900">
            You May Also Like
          </h2>

        </div>

      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {relatedProducts.map((item) => (

          <div
            key={item.id}
            className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            {/* Image */}
            <div className="h-64 overflow-hidden bg-gray-100">

              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
              />

            </div>

            {/* Details */}
            <div className="p-5">

              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
                {item.brand}
              </span>

              <h3 className="mt-4 line-clamp-2 text-lg font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm capitalize text-gray-500">
                {item.category}
              </p>

              {/* Rating */}
              <div className="mt-4 flex items-center justify-between">

                <span className="text-yellow-500">
                  ⭐ {item.rating}
                </span>

                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
                  {item.discountPercentage}% OFF
                </span>

              </div>

              {/* Price */}
              <div className="mt-5 flex items-center justify-between">

                <h2 className="text-2xl font-bold">
                  ${item.price}
                </h2>

                <NavLink
                  to={`/details/${item.id}`}
                  className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-500"
                >
                  View
                </NavLink>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
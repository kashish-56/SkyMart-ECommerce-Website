import { useContext } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MyStore } from "../context/MyStore";

import ProductInfo from "../components/ProductInfo";
import ProductReviews from "../components/ProductReviews";
import RelatedProducts from "../components/RelatedProducts";

export default function ProductDetails() {
  const { products } = useContext(MyStore);

  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen flex items-center justify-center bg-[#f6f3ec]">
          <h1 className="text-4xl font-bold text-gray-700">
            Product Not Found
          </h1>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#f6f3ec]">

        {/* Product Section */}
        <ProductInfo product={product} />

        {/* Reviews */}
        <ProductReviews reviews={product.reviews} />

        {/* Related Products */}
        <RelatedProducts
          currentProduct={product}
          products={products}
        />

      </main>

      <Footer />
    </>
  );
}
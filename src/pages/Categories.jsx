import { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MyStore } from "../context/MyStore";

const categories = [
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
  },
  {
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
  },
  {
    name: "Home Decor",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  },
  {
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  },
  {
    name: "Sports",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
  },
  {
  name: "Food & Beverages",
  image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
  },
];

export default function Categories() {
  const {setOpen} = useContext(MyStore)
  return (
    <>
    <Navbar/>
      <div className="bg-[#f7f3eb] min-h-screen px-5 py-10 sm:px-10" onClick={()=>setOpen(false)}>
        <h1 className="text-4xl font-semibold">Shop By Category</h1>

        <p className="mt-2 text-gray-500">
          Explore products from different categories
        </p>

        <div
          className="
mt-10
grid
grid-cols-2
gap-5
sm:grid-cols-3
lg:grid-cols-6
"
        >
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="
group
relative
overflow-hidden
rounded-2xl
cursor-pointer
"
            >
              <img
                src={cat.image}
                className="
h-52
w-full
object-cover
transition
duration-500
group-hover:scale-110
"
              />

              <div
                className="
absolute
inset-0
bg-black/40
flex
items-center
justify-center
"
              >
                <h2
                  className="
text-white
text-xl
font-semibold
"
                >
                  {cat.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

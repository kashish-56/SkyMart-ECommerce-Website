import { NavLink } from "react-router";
import { useContext } from "react";
import { MyStore } from "../context/MyStore";
import Button from "../components/Button";

export default function NotFound() {
   const { setIsShopOpen } = useContext(MyStore);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f6f3ec] px-6 text-center">
      {/* Eyebrow */}
      <p className="mb-4 text-[11px] font-bold tracking-[0.14em] text-[#ed6b3b]">
        404 ERROR
      </p>

      {/* Heading */}
      <h1 className="max-w-2xl text-5xl font-medium leading-tight tracking-tighter text-[#1e1d1a] md:text-7xl">
        That page wandered off.
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-md text-base leading-7 text-[#716d66]">
        Let&apos;s get you back to the good stuff.
      </p>

      {/* Button */}
      <NavLink to={'/'} onClick={()=>setIsShopOpen(false)}>
        <Button className="mt-10">
        Back to home →
      </Button>
      </NavLink>
    </main>
  );
}
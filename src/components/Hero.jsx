import { NavLink } from "react-router";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="grid min-h-132.5 grid-cols-1 bg-[#eacbaf] md:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-14 sm:px-12 md:px-16 lg:px-28">
        <p className="mb-4 text-[11px] font-bold tracking-[0.14em]">
          THE WEEKEND EDIT
        </p>

        <h1 className="max-w-162.5 text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-[#1e1d1a] sm:text-6xl md:text-7xl lg:text-7xl">
  Good things,
  <br />
  <em className="font-serif font-medium italic tracking-[-0.04em] text-[#b84925]">
    well found.
  </em>
</h1>

        <p className="my-6 max-w-92.5 leading-relaxed text-[#514a43]">
          Thoughtful finds for every corner of your life. Discover your next
          favorite thing.
        </p>

        <div>
          <NavLink to={"/shop"}>
            <Button>
            Explore the collection <span>→</span>
          </Button>
          </NavLink>
        </div>
      </div>

      <div className="relative min-h-75 overflow-hidden bg-[#d75e35] md:min-h-112.5">
        <div className="absolute right-[14%] top-[12%] h-55 w-55 rounded-full bg-[#f4bb48] sm:h-75 sm:w-75" />

        <div className="absolute -bottom-22.5 right-[20%] h-85 w-60 rounded-t-full bg-[#f7e5cc] sm:h-110 sm:w-77.5" />

        <div className="absolute -bottom-22.5 right-[30%] h-70 w-40 rounded-t-full bg-[#266b69] sm:h-90 sm:w-53.75" />

        <div className="absolute bottom-[11%] right-[10%] text-sm font-bold leading-tight tracking-[0.08em] text-white">
          NEW
          <br />
          SEASON
        </div>

        <div className="absolute left-[19%] top-[26%] rotate-[-19deg] text-6xl text-[#1f5050] sm:text-7xl">
          ✦
        </div>
      </div>
    </section>
  );
}
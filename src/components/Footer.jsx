export default function Footer() {
  return (
    <footer className="flex flex-col gap-5 bg-[#1e1d1a] px-5 py-10 text-xs text-[#eee8dc] sm:flex-row sm:items-center sm:justify-between sm:px-12">
      <a href="#top" className="text-2xl font-bold tracking-tight text-white">
        sky
        <span className="font-serif italic text-[#ed6b3b]">mart</span>
      </a>

      <p>Designed for all the little moments.</p>

      <p>© 2026 SkyMart</p>
    </footer>
  );
}
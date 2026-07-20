export default function Stats() {
  const stats = [
    ["10k+", "curated products"],
    ["4.9/5", "customer rating"],
    ["24h", "fast dispatch"],
  ];

  return (
    <section className="grid grid-cols-1 bg-[#eed3bd] px-5 py-10 text-center sm:grid-cols-3 sm:px-[5vw]">
      {stats.map(([value, label], index) => (
        <div
          key={label}
          className={`py-3 ${
            index < stats.length - 1
              ? "border-b border-[#c9a98f] sm:border-r sm:border-b-0"
              : ""
          }`}
        >
          <strong className="block font-serif text-[32px]">{value}</strong>
          <span className="text-xs text-[#716d66]">{label}</span>
        </div>
      ))}
    </section>
  );
}
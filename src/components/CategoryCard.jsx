export default function CategoryCard({
  title,
  icon,
  bg = "bg-[#d4ddd1]",
}) {
  return (
    <button
      className={`
        ${bg}
        flex flex-col justify-between overflow-hidden
        aspect-square md:aspect-[0.85]
        p-3 md:p-5
        text-left
        text-sm md:text-[17px]
        font-bold
        transition-transform duration-300
        hover:scale-[1.03]
      `}
    >
      <span className="self-end text-3xl md:text-5xl">{icon}</span>
      <span className="text-[#1e1d1a]">{title}</span>
    </button>
  );
}
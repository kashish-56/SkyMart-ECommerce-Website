export default function Button({
  children,
  variant = "dark",
  className = "",
  ...props
}) {
  const variants = {
    dark:
      "bg-[#1e1d1a] text-white hover:bg-[#ed6b3b]",

    outline:
      "border border-[#1e1d1a] bg-transparent text-[#1e1d1a] hover:bg-[#1e1d1a] hover:text-white",

    orange:
      "bg-[#ed6b3b] text-white hover:bg-[#d85c2f]",

    mustard:
      "bg-[#f4bb48] text-[#1e1d1a] hover:opacity-90",
  };

  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        justify-center
        gap-5
        px-4.5
        py-3.5
        text-[13px]
        font-bold
        transition-all
        duration-200
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
export function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  ...props
}) {
  const baseStyle =
    "flex items-center justify-center gap-2 px-4 py-2 rounded-full font-bold transition-all duration-300 active:scale-90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  const variants = {
    primary: "bg-yellow-400 text-slate-950 hover:bg-yellow-300 shadow-lg",
    secondary:
      "bg-slate-800 text-white hover:bg-slate-700 ring-1 ring-white/10",
    danger: "bg-red-600 text-white hover:bg-red-500",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

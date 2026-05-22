interface LiveBadgeProps {
  size?: "sm" | "md" | "lg";
}

export default function LiveBadge({ size = "md" }: LiveBadgeProps) {
  const sizes = {
    sm: "text-[10px] px-2 py-0.5 gap-1",
    md: "text-xs px-3 py-1 gap-1.5",
    lg: "text-sm px-4 py-1.5 gap-2",
  };

  const dotSizes = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2.5 h-2.5",
  };

  return (
    <span
      className={`inline-flex items-center font-bold uppercase tracking-wider bg-red-600 text-white rounded-full ${sizes[size]}`}
    >
      <span
        className={`${dotSizes[size]} bg-white rounded-full animate-pulse-live`}
      />
      Ao Vivo
    </span>
  );
}

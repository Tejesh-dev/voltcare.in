interface VoltCareLogoProps {
  scrolled?: boolean;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "text-lg md:text-xl",
  md: "text-2xl md:text-3xl",
  lg: "text-4xl md:text-5xl",
};

const VoltCareLogo = ({ scrolled = false, variant, size = "md" }: VoltCareLogoProps) => {
  const isDark = variant === "dark" || (!variant && scrolled);
  const baseColor = isDark ? "text-foreground" : "text-primary-foreground";

  return (
    <div className={`flex flex-col items-center leading-none`}>
      <div className={`flex font-bold tracking-[0.3em] ${sizeClasses[size]} ${baseColor} transition-colors duration-300`}>
        <span className="text-accent">V</span>
        <span>O</span>
        <span>L</span>
        <span>T</span>
        <span className="text-[hsl(45,100%,51%)]">C</span>
        <span>A</span>
        <span>R</span>
        <span className="text-[hsl(213,70%,45%)] tracking-normal">E</span>
      </div>
      <span className={`text-[8px] md:text-[9px] tracking-[0.35em] uppercase font-medium ${isDark ? "text-muted-foreground" : "text-primary-foreground/50"} transition-colors duration-300 mt-0.5`}>
        Electrical Solutions
      </span>
    </div>
  );
};

export default VoltCareLogo;

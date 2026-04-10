import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    subtitle: "Electrical Consulting",
    title: "Powering Your Vision\nWith Expertise",
  },
  {
    image: hero2,
    subtitle: "Advisory & Planning",
    title: "Professional\nElectrical Solutions",
  },
  {
    image: hero3,
    subtitle: "Industrial & Commercial",
    title: "Precision\nEngineering",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[100svh] min-h-[580px]">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1.5s] ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.subtitle}
            className={`w-full h-full object-cover ${i === current ? "animate-ken-burns" : ""}`}
            width={1920}
            height={1080}
          />
        </div>
      ))}

      <div className="absolute inset-0 z-20" style={{ background: "var(--hero-overlay)" }} />

      <div className="relative z-30 container mx-auto px-4 sm:px-6 h-full flex items-center">
        <div className="max-w-2xl w-full">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute transition-all duration-700 ${
                i === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6 pointer-events-none"
              }`}
            >
              <p className="text-[11px] sm:text-[13px] font-medium tracking-[0.25em] uppercase text-primary-foreground/50 mb-3 sm:mb-4">
                {slide.subtitle}
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-semibold text-primary-foreground leading-[1.1] whitespace-pre-line">
                {slide.title}
              </h1>
            </div>
          ))}

          <div className="mt-[180px] sm:mt-[220px] md:mt-[250px] flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-accent text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded text-xs sm:text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              GET A FREE QUOTE
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 border border-primary-foreground/30 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded text-xs sm:text-sm font-medium tracking-wide hover:bg-primary-foreground/10 transition-colors"
            >
              OUR SERVICES
            </a>
          </div>

          <div className="mt-10 sm:mt-16 flex gap-6 sm:gap-12">
            {[
              { num: "30+", label: "Years" },
              { num: "700+", label: "Projects" },
              { num: "24/7", label: "Support" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-primary-foreground">
                  {s.num}
                </div>
                <div className="text-[10px] sm:text-xs tracking-widest uppercase text-primary-foreground/40 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-6 md:right-12 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-0.5 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 sm:w-10 bg-primary-foreground"
                : "w-4 sm:w-5 bg-primary-foreground/30"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

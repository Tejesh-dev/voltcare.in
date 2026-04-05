// ServicesSection — Showcases all electrical services offered by VOLTCARE
import {
  Building2,
  Factory,
  Home,
  Wrench,
  Lightbulb,
  LayoutGrid,
  ClipboardCheck,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Electrical Consulting",
    desc: "Comprehensive advisory for project planning, energy audits, compliance reviews, load calculations, and system design — for projects of any scale.",
  },
  {
    icon: Building2,
    title: "Commercial Electrical",
    desc: "End-to-end electrical solutions for offices, showrooms, retail outlets, and commercial buildings — installation, maintenance, and safety compliance.",
  },
  {
    icon: Factory,
    title: "Industrial Solutions",
    desc: "Heavy-duty electrical systems for factories and manufacturing plants — switchboard design, high-voltage installations, motor controls, and load management.",
  },
  {
    icon: Home,
    title: "Residential Services",
    desc: "Complete home electrical services — new house wiring, panel upgrades, smart home automation, safety inspections, and energy-efficient lighting solutions.",
  },
  {
    icon: Wrench,
    title: "Fault Diagnosis & Repair",
    desc: "Rapid fault detection and repair using advanced diagnostic tools. Preventive maintenance programs and scheduled system testing to avoid breakdowns.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design & Installation",
    desc: "Professional lighting design for interiors and exteriors — LED retrofits, smart lighting controls, decorative installations, and landscape lighting.",
  },
  {
    icon: LayoutGrid,
    title: "Switchboard & Panel Design",
    desc: "Custom-engineered switchboard and distribution panel design, fabrication, and installation — safe, efficient, scalable, and future-proof systems.",
  },
  {
    icon: Zap,
    title: "Appliance & Product Advisory",
    desc: "Expert guidance on electrical appliance selection, installation, load planning, and energy efficiency — partnered with India's top electrical brands.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8">
    <div className="container mx-auto">
      {/* Section Header */}
      <div className="max-w-xl mb-10 sm:mb-16">
        <p className="text-[11px] sm:text-[13px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-2 sm:mb-3">
          Our Services
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-foreground leading-tight">
          Complete Electrical Solutions
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mt-3 sm:mt-4 leading-relaxed">
          From initial consulting and planning to installation, testing, and ongoing maintenance — VOLTCARE delivers expert solutions for every electrical need across residential, commercial, and industrial sectors.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-card p-5 sm:p-8 group hover:bg-secondary transition-colors duration-300"
          >
            <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground/30 group-hover:text-accent transition-colors mb-4 sm:mb-6" />
            <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1.5 sm:mb-2 font-sans">{s.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

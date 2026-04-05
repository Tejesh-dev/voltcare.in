// AboutSection — Company history, founder info, and reasons to choose VOLTCARE
import { Clock, Award, CheckCircle2, Users, Linkedin, ExternalLink } from "lucide-react";

const stats = [
  { num: "30+", label: "Years of Excellence" },
  { num: "1000+", label: "Happy Clients" },
  { num: "2", label: "Cities Served" },
  { num: "100%", label: "Client Satisfaction" },
];

const reasons = [
  { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock emergency service for urgent electrical issues — day or night." },
  { icon: Award, title: "Certified & Trusted", desc: "Professional electrical consultant & contractor with 30+ years of proven expertise." },
  { icon: CheckCircle2, title: "Quality Guaranteed", desc: "Premium workmanship using top-brand materials with meticulous attention to detail." },
  { icon: Users, title: "Expert Advisory", desc: "Professional electrical consulting, energy audits, and comprehensive project planning." },
];

// Platform links where VOLTCARE is listed
const platformLinks = [
  { name: "LinkedIn", url: "#", icon: Linkedin },
  { name: "IndiaMART", url: "https://www.indiamart.com", icon: ExternalLink },
  { name: "Sulekha", url: "https://www.sulekha.com", icon: ExternalLink },
  { name: "OLX", url: "https://www.olx.in", icon: ExternalLink },
  { name: "JustDial", url: "https://www.justdial.com", icon: ExternalLink },
  { name: "UrbanClap", url: "https://www.urbancompany.com", icon: ExternalLink },
];

const AboutSection = () => (
  <section id="about" className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 section-alt">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">
        {/* Left — About & Founder */}
        <div>
          <p className="text-[11px] sm:text-[13px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-2 sm:mb-3">
            About Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-foreground leading-tight mb-5 sm:mb-8">
            30+ Years of Trusted Electrical Expertise
          </h2>
          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">VOLTCARE Electrical Solutions</strong> was started by{" "}
              <strong className="text-foreground">Tejesh Mulchand Bhagat's father in Gondia in 1994</strong>. Tejesh, a seasoned Electrical Consultant, Contractor & Technical Advisor, carried forward the legacy and expanded operations to{" "}
              <strong className="text-foreground">Nagpur in 2019</strong>.
            </p>
            <p>
              With over three decades of family expertise, VOLTCARE has grown into one of the region's most trusted names in electrical consulting, contracting, and advisory services.
            </p>
            <p>
              We specialize in end-to-end electrical solutions for commercial, industrial, and residential properties — from complex switchboard designs and energy audits to simple home repairs. We are tie-up partners with leading electrical product brands, ensuring you get only the best quality materials.
            </p>
          </div>

          {/* Founder Card */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-lg bg-card border border-border">
            <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1">Tejesh Mulchand Bhagat</h4>
            <p className="text-xs sm:text-sm text-muted-foreground">Founder, Electrical Consultant & Contractor</p>
            <p className="text-xs text-muted-foreground mt-1">Family legacy since 1994 (Gondia) · Expanded 2019 (Nagpur)</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-xl sm:text-2xl font-serif font-semibold text-foreground">{s.num}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Platform Links */}
          <div className="mt-8 sm:mt-10">
            <p className="text-[11px] sm:text-[13px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-3">
              Find Us On
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {platformLinks.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded border border-border bg-card text-xs sm:text-sm font-medium text-foreground/70 hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <p.icon className="w-3.5 h-3.5" />
                  {p.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Why VOLTCARE */}
        <div className="space-y-3 sm:space-y-4">
          <p className="text-[11px] sm:text-[13px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-2 sm:mb-3">
            Why VOLTCARE
          </p>
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex gap-3 sm:gap-5 bg-card rounded-lg border border-border p-4 sm:p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <r.icon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/60" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm sm:text-[15px]">{r.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{r.desc}</p>
              </div>
            </div>
          ))}

          {/* Trusted Brands */}
          <div className="mt-4 p-4 sm:p-6 rounded-lg bg-card border border-border">
            <h4 className="text-sm sm:text-[15px] font-semibold text-foreground mb-2">Trusted Brand Partners</h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We are authorized tie-up partners with leading electrical product companies including Havells, Polycab, Finolex, Anchor, Legrand, Schneider Electric, and more — ensuring top-quality materials for every project.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

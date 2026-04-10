// AboutSection — Company legacy narrative with founder details and social/platform links
import { Award, Users, MapPin, Star, Instagram, Facebook, ExternalLink, Linkedin } from "lucide-react";
import founderImg from "@/assets/founder.jpg";

const platformLinks = [
  { name: "Instagram", url: "https://www.instagram.com/voltcare_electrical_solutions/", icon: Instagram },
  { name: "Facebook", url: "https://www.facebook.com/", icon: Facebook },
  { name: "LinkedIn", url: "#", icon: Linkedin },
  { name: "IndiaMART", url: "https://www.indiamart.com", icon: ExternalLink },
  { name: "Sulekha", url: "https://www.sulekha.com", icon: ExternalLink },
  { name: "OLX", url: "https://www.olx.in", icon: ExternalLink },
  { name: "JustDial", url: "https://www.justdial.com", icon: ExternalLink },
  { name: "Urban Company", url: "https://www.urbancompany.com", icon: ExternalLink },
];

const yearsOfExcellence = new Date().getFullYear() - 1994;

const stats = [
  { num: "30+", label: "Years of Excellence", icon: Award },
  { num: "700+", label: "Happy Clients", icon: Users },
  { num: "2", label: "Cities Served", icon: MapPin },
  { num: "100%", label: "Client Satisfaction", icon: Star },
];

const AboutSection = () => (
  <section id="about" className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 section-alt">
    <div className="container mx-auto max-w-7xl">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14">
        <p className="text-[11px] sm:text-[13px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-2 sm:mb-3">
          About Us
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-foreground leading-tight">
          Our Legacy. Our Craft. Our Promise.
        </h2>
        <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mb-12 sm:mb-16">
        {stats.map((s) => (
          <div key={s.label} className="text-center p-5 rounded-[1.5rem] bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300">
            <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent mx-auto mb-3" />
            <div className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-foreground">{s.num}</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground mt-2 font-medium tracking-[0.18em] uppercase">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Two-column layout */}
      <div className="grid md:grid-cols-12 gap-8 xl:gap-10 items-start">
        {/* Narrative */}
        <div className="md:col-span-7 lg:col-span-8 space-y-5 text-sm sm:text-base text-muted-foreground leading-7">
          <p className="text-base sm:text-lg text-foreground font-medium italic border-l-2 border-accent pl-4">
            In <strong className="text-foreground">1994</strong>, <strong className="text-foreground">Mr. Mulchand Bhagat</strong> planted that foundation in Gondia — establishing Bhagat Electricals with nothing but relentless dedication and mastery of his craft. Decade after decade, he built something rare: a name that people trusted without question.
          </p>

          <p className="text-foreground font-medium">That legacy was never meant to stop there.</p>

          <p>
            In <strong className="text-foreground">2019</strong>, his son <strong className="text-foreground">Tejesh Mulchand Bhagat</strong> — armed with deep technical expertise and an uncompromising standard of excellence — took that torch to Nagpur and founded <strong className="text-foreground">VOLTCARE Electrical Solutions</strong>. Not just as a business, but as a declaration — that world-class electrical solutions, built on {yearsOfExcellence}+ years of family expertise, were now available to every home, every industry, every ambition in the region.
          </p>

          <p>
            Today, VOLTCARE is one of Central India's most trusted electrical consulting and contracting firms — delivering precision-engineered solutions across commercial, industrial, and residential sectors in Nagpur and Maharashtra.
          </p>

          <p>
            From large-scale industrial electrical infrastructure, high-tension installations, and substation design — down to precision panel wiring, energy audits, and residential fit-outs — we command every scale, every complexity, every challenge.
          </p>
        </div>

        {/* Founder Card */}
        <div className="md:col-span-5 lg:col-span-4">
          <div className="p-6 sm:p-8 rounded-[2rem] bg-card border border-border text-center md:sticky md:top-24 shadow-xl shadow-slate-950/5">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden mx-auto mb-4">
              <img
                src={founderImg}
                alt="Tejesh Mulchand Bhagat"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-base sm:text-lg font-serif font-semibold text-foreground">
              Tejesh Mulchand Bhagat
            </h3>
            <p className="text-sm sm:text-base font-medium text-accent mt-2">
              Founder & Managing Director
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
              Electrical Consultant · Contractor · Technical Advisor
            </p>

            <div className="w-16 h-px bg-border mx-auto my-5" />

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              A family forged in excellence since 1994, Gondia.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              VOLTCARE Est. 2019, Nagpur
            </p>

            {/* Platform & Social Links
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-3">
                Find Us On
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {platformLinks.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border bg-background text-[10px] sm:text-[11px] font-medium text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors"
                  >
                    <p.icon className="w-3 h-3" />
                    {p.name}
                  </a>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

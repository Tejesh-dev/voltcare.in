const plans = [
  {
    title: "Residential",
    subtitle: "For homeowners",
    featured: false,
    items: [
      { service: "House Wiring (per point)", price: "₹350 – ₹500" },
      { service: "Fan Installation", price: "₹250 – ₹400" },
      { service: "Light Fitting", price: "₹150 – ₹300" },
      { service: "Switch/Socket", price: "₹100 – ₹200" },
      { service: "MCB/DB Installation", price: "₹500 – ₹1,500" },
      { service: "Complete Rewiring", price: "Per sq.ft" },
      { service: "Fault Diagnosis", price: "₹500 – ₹800" },
      { service: "Emergency Service", price: "₹800 – ₹1,200" },
    ],
  },
  {
    title: "Commercial",
    subtitle: "For offices & shops",
    featured: true,
    items: [
      { service: "Office Wiring (per point)", price: "₹400 – ₹600" },
      { service: "Panel Installation", price: "₹2K – ₹5K" },
      { service: "Commercial Lighting", price: "₹300 – ₹800" },
      { service: "Power Distribution", price: "Custom" },
      { service: "Energy Audit", price: "₹3K – ₹10K" },
      { service: "Safety Compliance", price: "₹2.5K – ₹8K" },
      { service: "Complete Setup", price: "Per project" },
      { service: "Maintenance Contract", price: "Custom" },
    ],
  },
  {
    title: "Industrial",
    subtitle: "For factories & plants",
    featured: false,
    items: [
      { service: "Switchboard Design", price: "Custom" },
      { service: "Three-Phase Installation", price: "Custom" },
      { service: "Motor Control Panel", price: "₹15,000+" },
      { service: "Load Management", price: "Custom" },
      { service: "Industrial Wiring", price: "Per project" },
      { service: "Equipment Installation", price: "Custom" },
      { service: "Preventive Maintenance", price: "Contract" },
      { service: "Emergency 24/7", price: "Contract" },
    ],
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8">
    <div className="container mx-auto">
      <div className="max-w-xl mb-10 sm:mb-16">
        <p className="text-[11px] sm:text-[13px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-2 sm:mb-3">
          Pricing
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-foreground leading-tight">
          Transparent & Fair Rates
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mt-3 sm:mt-4 leading-relaxed">
          Upfront pricing with no hidden charges. Final quote provided after inspection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`rounded-lg border p-5 sm:p-8 flex flex-col ${
              plan.featured
                ? "border-foreground bg-foreground text-primary-foreground"
                : "border-border bg-card"
            }`}
          >
            {plan.featured && (
              <span className="self-start text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase bg-accent text-accent-foreground px-3 py-1 rounded mb-3 sm:mb-4">
                Popular
              </span>
            )}
            <h3 className={`text-lg sm:text-xl font-serif font-semibold ${plan.featured ? "" : "text-foreground"}`}>
              {plan.title}
            </h3>
            <p className={`text-xs sm:text-sm mb-5 sm:mb-8 ${plan.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
              {plan.subtitle}
            </p>

            <div className="space-y-2.5 sm:space-y-3 flex-1">
              {plan.items.map((item) => (
                <div key={item.service} className="flex justify-between items-baseline gap-2">
                  <span className={`text-xs sm:text-sm ${plan.featured ? "text-primary-foreground/80" : "text-foreground/80"}`}>
                    {item.service}
                  </span>
                  <span className={`text-xs sm:text-sm font-medium whitespace-nowrap ${plan.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className={`mt-6 sm:mt-8 text-center py-3 sm:py-3.5 rounded text-xs sm:text-[13px] font-semibold tracking-wide transition-all ${
                plan.featured
                  ? "bg-primary-foreground text-foreground hover:opacity-90"
                  : "bg-foreground text-background hover:opacity-90"
              }`}
            >
              GET QUOTE
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;

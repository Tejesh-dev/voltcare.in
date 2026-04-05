// ContactSection — Contact info, Google Form, embedded Google Maps, and direct communication channels
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";

const ContactSection = () => {
  // Google Form URL — replace with your actual Google Form link
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf2XOGMC_o9Pl01rHZJBFSmSK_oJBzSsL_pT1cR_vKoPmPCxQ/viewform?usp=publish-editor";

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 section-alt">
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[11px] sm:text-[13px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-2 sm:mb-3">
            Get In Touch
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-foreground leading-tight">
            Let's Discuss Your Project
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-xl mx-auto">
            <span className="font-semibold text-foreground">Tejesh Mulchand Bhagat</span> — Founder, Electrical Consultant & Contractor
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left — Contact Details */}
          <div className="space-y-4 sm:space-y-5">
            {[
              {
                icon: Phone,
                title: "Call Us",
                lines: [
                  { text: "+91 84597 18594", href: "tel:+918459718594" },
                  { text: "+91 99701 74508", href: "tel:+919970174508" },
                ],
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                lines: [
                  { text: "+91 99701 74508 — Chat Now", href: "https://wa.me/919970174508?text=Hello%2C%20I%20found%20you%20on%20your%20website.%20I%20need%20electrical%20services." },
                ],
              },
              {
                icon: Mail,
                title: "Email",
                lines: [{ text: "info@voltcaresolutions.com", href: "mailto:info@voltcaresolutions.com" }],
              },
              {
                icon: MapPin,
                title: "Service Areas",
                lines: [
                  { text: "Gondia, Maharashtra (Since 1994)" },
                  { text: "Nagpur, Maharashtra (Since 2019)" },
                ],
              },
              {
                icon: Clock,
                title: "Working Hours",
                lines: [
                  { text: "24/7 Emergency Services" },
                  { text: "Regular: Mon–Sat, 9 AM – 7 PM" },
                ],
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-card border border-border">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground/50" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-foreground">{item.title}</h4>
                  {item.lines.map((line) =>
                    line.href ? (
                      <a
                        key={line.text}
                        href={line.href}
                        target={line.href.startsWith("http") ? "_blank" : undefined}
                        rel={line.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {line.text}
                      </a>
                    ) : (
                      <p key={line.text} className="text-xs sm:text-sm text-muted-foreground">{line.text}</p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Center — Google Form */}
          <div className="bg-card rounded-lg border border-border p-4 sm:p-6 flex flex-col">
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 font-sans">Send an Inquiry</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4">
              Fill out our inquiry form and we'll get back to you within 24 hours.
            </p>

            {/* 
              HOW TO LINK YOUR GOOGLE FORM:
              1. Open Google Forms → Create your form
              2. Click "Send" → Click the embed icon (<>) → Copy the iframe URL
              3. Replace YOUR_FORM_ID below with your actual form ID
              
              Embed URL format: https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true
            */}
            <iframe
              src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
              width="100%"
              className="rounded border-0 w-full flex-1 min-h-[350px] sm:min-h-[450px]"
              title="VOLTCARE Inquiry Form"
              loading="lazy"
            >
              Loading form…
            </iframe>

            {/* Fallback: Direct link to Google Form */}
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 w-full bg-foreground text-background px-6 py-3 rounded text-xs sm:text-[13px] font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              OPEN INQUIRY FORM
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right — Embedded Google Map */}
          <div className="bg-card rounded-lg border border-border p-4 sm:p-6 flex flex-col">
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 font-sans">Our Location</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4">
              Serving Gondia & Nagpur, Maharashtra
            </p>

            <div className="flex-1 min-h-[300px] sm:min-h-[400px] rounded overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3!2d79.13!3d21.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA5JzAwLjAiTiA3OcKwMDcnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VOLTCARE Location - Nagpur"
                className="w-full h-full"
              />
            </div>

            <a
              href="https://share.google/utiyhjaOF838LacTp"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 w-full border border-border text-foreground px-6 py-3 rounded text-xs sm:text-[13px] font-medium tracking-wide hover:bg-secondary transition-colors"
            >
              <MapPin className="w-4 h-4" />
              OPEN IN GOOGLE MAPS
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

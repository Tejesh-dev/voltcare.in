// Footer — Site footer with navigation, privacy link, and copyright
import { Link } from "react-router-dom";
import VoltCareLogo from "./VoltCareLogo";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/50 py-8 sm:py-12 px-4 sm:px-6">
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-5 sm:gap-6 text-center md:flex-row md:justify-between md:text-left">
        <VoltCareLogo variant="light" size="sm" />
        <p className="text-[10px] sm:text-xs tracking-wide">
          © {new Date().getFullYear()} VOLTCARE Electrical Solutions. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {["Home", "Services", "About", "Pricing", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[10px] sm:text-xs tracking-wide hover:text-primary-foreground transition-colors"
            >
              {l}
            </a>
          ))}
          <Link
            to="/privacy-policy"
            className="text-[10px] sm:text-xs tracking-wide hover:text-primary-foreground transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

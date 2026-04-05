// PrivacyPolicy — Legal privacy policy page for VOLTCARE Electrical Solutions
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    {/* Header */}
    <div className="bg-foreground text-primary-foreground py-12 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm mb-4 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <h1 className="text-2xl sm:text-4xl font-serif font-semibold">Privacy Policy</h1>
        <p className="text-sm text-primary-foreground/50 mt-2">Last updated: April 2026</p>
      </div>
    </div>

    {/* Content */}
    <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16 max-w-3xl">
      <div className="prose prose-sm sm:prose-base text-muted-foreground space-y-6">
        <section>
          <h2 className="text-lg sm:text-xl font-serif font-semibold text-foreground">1. Introduction</h2>
          <p>
            VOLTCARE Electrical Solutions ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-serif font-semibold text-foreground">2. Information We Collect</h2>
          <p>We may collect the following information:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name, phone number, and email address (via contact form or direct inquiry)</li>
            <li>Service requirements and project details</li>
            <li>Location and address for on-site services</li>
            <li>Website usage data (cookies, analytics)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-serif font-semibold text-foreground">3. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To respond to your inquiries and provide quotations</li>
            <li>To schedule and deliver electrical services</li>
            <li>To improve our website and customer experience</li>
            <li>To send service updates (only with your consent)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-serif font-semibold text-foreground">4. Data Protection</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. Your data is never sold or shared with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-serif font-semibold text-foreground">5. Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. You can disable cookies in your browser settings at any time.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-serif font-semibold text-foreground">6. Third-Party Services</h2>
          <p>
            Our website may contain links to third-party platforms (Google Maps, WhatsApp, IndiaMART, etc.). We are not responsible for the privacy practices of these external services.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-serif font-semibold text-foreground">7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Request access to your personal data</li>
            <li>Request correction or deletion of your data</li>
            <li>Withdraw consent for communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-serif font-semibold text-foreground">8. Contact Us</h2>
          <p>For any privacy-related questions, please contact us:</p>
          <ul className="list-none space-y-1">
            <li><strong>Name:</strong> Tejesh Mulchand Bhagat</li>
            <li><strong>Phone:</strong> <a href="tel:+919970174508" className="text-foreground hover:text-accent">+91 99701 74508</a></li>
            <li><strong>Email:</strong> <a href="mailto:info@voltcaresolutions.com" className="text-foreground hover:text-accent">info@voltcaresolutions.com</a></li>
            <li><strong>Areas:</strong> Gondia & Nagpur, Maharashtra, India</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;

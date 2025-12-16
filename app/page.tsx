import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Big Lou Mobile Welding and Metal Fabrication Service",
    "description": "Professional mobile welding and metal fabrication services in Nassau County, NY. On-site welding, construction equipment repair, and 24-hour emergency service.",
    "telephone": "(516) 265-9889",
    "areaServed": {
      "@type": "Place",
      "name": "Nassau County, NY"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "05:00",
      "closes": "22:00"
    },
    "priceRange": "$$",
    "serviceType": [
      "Mobile Welding",
      "Metal Fabrication",
      "Construction Equipment Repair",
      "Truck Repair",
      "Custom Fabrication",
      "Aluminum Welding",
      "Stainless Steel Welding",
      "24-Hour Emergency Welding"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <WhyChooseUs />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}


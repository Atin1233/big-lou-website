import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
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
      <Helmet>
        <title>Big Lou Mobile Welding & Metal Fabrication | Nassau County NY | 24/7 Emergency Service</title>
        <meta 
          name="description" 
          content="Professional mobile welding in Nassau County. On-site metal fabrication, construction equipment repair, MIG/TIG/Arc welding. 24-hour emergency service. Call (516) 265-9889." 
        />
        <meta 
          name="keywords" 
          content="mobile welding nassau, metal fabrication nassau county, on site welding, construction equipment repair, truck welding, welder nassau, emergency welding service, aluminum welding, stainless steel welding" 
        />
        <meta property="og:title" content="Big Lou Mobile Welding & Metal Fabrication | Nassau County NY" />
        <meta property="og:description" content="On-site welding and metal fabrication services. We come to you! 24-hour emergency service available. Call (516) 265-9889." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://bigloumobilewelding.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

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
};

export default Index;

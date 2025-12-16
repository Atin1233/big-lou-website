import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Construction Equipment Repair",
    "Truck Repair",
    "Residential & Commercial Welding",
    "Trailer Repair & Fabrication",
    "Custom Metal Fabrication",
    "24-Hour Emergency Service",
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-primary-foreground text-xl">BL</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Big Lou Mobile Welding
                </h3>
                <p className="text-sm text-muted-foreground">Metal Fabrication Service</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Professional mobile welding and metal fabrication services in Nassau County. 
              We bring certified expertise directly to your location. MIG, TIG, Arc, Stick & Plasma Cutting.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:5162659889" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-bold text-lg">(516) 265-9889</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>Mon – Sun: 5 AM – 10 PM</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Nassau County, NY (On-Site Service)</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Big Lou Mobile Welding and Metal Fabrication Service. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Serving Nassau County, NY
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

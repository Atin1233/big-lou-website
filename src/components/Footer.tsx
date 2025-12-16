import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">
              Big Lou <span className="text-primary">Welding</span>
            </h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Mobile welding and metal fabrication services in Nassau County.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Contact</p>
              <a href="tel:5162659889" className="text-foreground hover:text-primary transition-colors">
                (516) 265-9889
              </a>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Hours</p>
              <p className="text-foreground">Mon–Sun: 5AM – 10PM</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Area</p>
              <p className="text-foreground">Nassau County, NY</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Big Lou Mobile Welding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
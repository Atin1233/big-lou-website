"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import mobileServiceImage from "@/assets/mobile-service.jpg";

const services = [
  "Construction Equipment Repair",
  "Truck Repair",
  "Residential & Commercial Construction",
  "Trailer Repair & Fabrication",
  "Motorcycle Welding",
  "Sign Fabrication & Repair",
  "Custom Fabrications",
  "Ladder Racks",
  "Aluminum Welding",
  "Stainless Steel Welding",
  "Marine Repairs",
];

const processes = ["MIG", "TIG", "Arc", "Stick", "Plasma Cutting"];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={mobileServiceImage} 
                alt="Mobile welding service truck" 
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 left-6 right-6 md:left-8 md:right-auto bg-card border border-border rounded-xl p-6 shadow-lg">
              <p className="text-primary font-heading text-2xl font-bold">We Come To You</p>
              <p className="text-muted-foreground text-sm">On-site service across Nassau County</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <p className="text-primary font-medium mb-4">Our Services</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              Professional Welding For Every Project
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              From heavy equipment to custom projects, we bring certified welding 
              expertise directly to your location.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-foreground text-sm">{service}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {processes.map((process) => (
                <span 
                  key={process}
                  className="px-3 py-1.5 bg-secondary text-foreground text-xs font-medium rounded-full"
                >
                  {process}
                </span>
              ))}
            </div>

            <a href="tel:5162659889">
              <Button variant="cta" size="lg" className="gap-2">
                <Phone className="w-5 h-5" />
                Get a Free Quote
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
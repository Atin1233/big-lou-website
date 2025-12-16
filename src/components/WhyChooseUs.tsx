import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-medium mb-4">About</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              Nassau County's Mobile Welder
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Big Lou Mobile Welding brings professional metal fabrication and 
                certified welding services directly to your location. No need to 
                transport heavy equipment — we come to you.
              </p>
              <p>
                With expertise in MIG, TIG, Arc, Stick welding and Plasma Cutting, 
                we handle everything from construction equipment repairs to custom 
                fabrication projects.
              </p>
              <p>
                Available 7 days a week with 24-hour emergency service for when 
                you need us most.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="font-heading text-4xl md:text-5xl font-bold text-primary">24/7</p>
                <p className="text-muted-foreground mt-1">Emergency Service</p>
              </div>
              <div>
                <p className="font-heading text-4xl md:text-5xl font-bold text-foreground">5+</p>
                <p className="text-muted-foreground mt-1">Welding Processes</p>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-foreground font-medium mb-4">Ready to get started?</p>
              <a href="tel:5162659889">
                <Button variant="cta" size="lg" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Call (516) 265-9889
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
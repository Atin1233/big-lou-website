import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Get In Touch Today
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Ready to get started? Call us now for a free estimate. We serve all of Nassau County with prompt, professional mobile welding services.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <a 
                href="tel:5162659889" 
                className="flex items-start gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">Phone</h3>
                  <p className="text-primary text-xl font-bold">(516) 265-9889</p>
                  <p className="text-muted-foreground text-sm">Tap to call</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">Hours of Operation</h3>
                  <p className="text-foreground font-medium">Monday – Sunday</p>
                  <p className="text-primary font-bold">5:00 AM – 10:00 PM</p>
                  <p className="text-muted-foreground text-sm mt-1">24-Hour Emergency Service Available</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">Service Area</h3>
                  <p className="text-foreground font-medium">Nassau County, NY</p>
                  <p className="text-muted-foreground text-sm">On-Site Mobile Service – We Come to You</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="w-full bg-gradient-to-br from-secondary via-background to-secondary border border-border rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <Phone className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
                  Contact Big Lou today for a free estimate on your welding or metal fabrication needs.
                </p>

                <a href="tel:5162659889">
                  <Button variant="cta" size="xl" className="gap-3 glow-orange">
                    <Phone className="w-6 h-6" />
                    <span className="font-heading text-xl font-bold">CALL (516) 265-9889</span>
                  </Button>
                </a>

                <p className="text-muted-foreground text-sm mt-6">
                  Available 7 days a week • Emergency service 24/7
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

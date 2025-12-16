import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-medium mb-4">Contact</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              Get a Free Estimate
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl">
              Ready to start your project? Call us for a free estimate. We serve 
              all of Nassau County with on-site mobile welding services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            <div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">Phone</span>
              </div>
              <a href="tel:5162659889" className="text-foreground text-xl font-medium hover:text-primary transition-colors">
                (516) 265-9889
              </a>
            </div>

            <div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Hours</span>
              </div>
              <p className="text-foreground text-xl font-medium">5AM – 10PM Daily</p>
              <p className="text-primary text-sm">24hr Emergency</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Service Area</span>
              </div>
              <p className="text-foreground text-xl font-medium">Nassau County, NY</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="tel:5162659889">
              <Button variant="cta" size="lg" className="gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
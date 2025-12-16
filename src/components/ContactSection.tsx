import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-medium mb-4">Contact</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              Get Your Free Estimate
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
              Ready to start your project? Call us now for a free estimate. 
              We serve all of Nassau County with on-site mobile welding services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-8"
          >
            <a href="tel:5162659889" className="block group">
              <p className="text-muted-foreground text-sm mb-2">Call us now</p>
              <p className="font-heading text-4xl md:text-6xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                (516) 265-9889
              </p>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Mon–Sun: 5AM – 10PM</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-medium">24hr Emergency</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Nassau County, NY</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
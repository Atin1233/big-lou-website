import { Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-welding.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/90" />

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium mb-4"
          >
            Mobile Welding • Nassau County
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1]"
          >
            Professional Welding & Metal Fabrication
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
          >
            On-site welding services for construction, trucks, trailers, and custom fabrication. 
            We come to you — available 24/7 for emergencies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="tel:5162659889">
              <Button variant="cta" size="lg" className="gap-2 w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Call (516) 265-9889
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Services
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 flex items-center gap-8 text-sm text-muted-foreground"
          >
            <span>Mon–Sun: 5AM – 10PM</span>
            <span className="text-primary">24hr Emergency</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
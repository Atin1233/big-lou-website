import { motion } from "framer-motion";
import { Phone, Truck, Clock, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Truck,
    title: "Mobile Service",
    description: "We come to your location with all the tools and equipment needed.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency",
    description: "Round-the-clock availability for urgent welding needs.",
  },
  {
    icon: Award,
    title: "Certified Expertise",
    description: "Skilled in MIG, TIG, Arc, Stick welding and Plasma Cutting.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Professional-grade results on every job, big or small.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium mb-4">Why Choose Us</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              Nassau County's Trusted Mobile Welder
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Big Lou Mobile Welding delivers professional, on-site metal fabrication 
              with the expertise to handle any project.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-secondary/50 rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contact us today for a free estimate. Available 7 days a week 
                  with 24-hour emergency service.
                </p>
                <a href="tel:5162659889">
                  <Button variant="cta" size="lg" className="gap-2">
                    <Phone className="w-5 h-5" />
                    Call (516) 265-9889
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="font-heading text-4xl md:text-5xl font-bold text-primary">24/7</p>
                  <p className="text-muted-foreground text-sm mt-1">Emergency Service</p>
                </div>
                <div>
                  <p className="font-heading text-4xl md:text-5xl font-bold text-foreground">5+</p>
                  <p className="text-muted-foreground text-sm mt-1">Welding Processes</p>
                </div>
                <div>
                  <p className="font-heading text-4xl md:text-5xl font-bold text-foreground">7</p>
                  <p className="text-muted-foreground text-sm mt-1">Days a Week</p>
                </div>
                <div>
                  <p className="font-heading text-4xl md:text-5xl font-bold text-foreground">100%</p>
                  <p className="text-muted-foreground text-sm mt-1">Satisfaction</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
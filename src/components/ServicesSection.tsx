import { 
  Truck, 
  Home, 
  Wrench, 
  Bike, 
  FileText, 
  Cog, 
  Construction,
  Anchor,
  Zap,
  Phone,
  Clock,
  Shield
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Construction,
    title: "Construction Equipment Repair",
    description: "Heavy machinery repairs on-site. Minimize downtime with our mobile welding solutions.",
  },
  {
    icon: Truck,
    title: "Truck Repair",
    description: "Frame repairs, bumper fabrication, and structural welding for commercial trucks.",
  },
  {
    icon: Home,
    title: "Residential & Commercial Construction",
    description: "Structural welding for buildings, gates, railings, and architectural metalwork.",
  },
  {
    icon: Wrench,
    title: "Trailers (Repair & Fabrication)",
    description: "Custom trailer builds, repairs, and modifications for all trailer types.",
  },
  {
    icon: Bike,
    title: "Motorcycle Welding",
    description: "Frame repairs, custom fabrication, and exhaust work for motorcycles.",
  },
  {
    icon: FileText,
    title: "Signs Fabrication & Repair",
    description: "Custom metal signs, frames, and structural supports for businesses.",
  },
  {
    icon: Cog,
    title: "Custom Fabrications",
    description: "Bring your ideas to life with custom metalwork tailored to your specifications.",
  },
  {
    icon: Construction,
    title: "Ladder Racks",
    description: "Custom ladder rack fabrication and installation for work vehicles.",
  },
  {
    icon: Shield,
    title: "Aluminum Welding",
    description: "Specialized aluminum welding for boats, trailers, and custom projects.",
  },
  {
    icon: Shield,
    title: "Stainless Steel Welding",
    description: "Precision stainless steel work for food service, medical, and industrial applications.",
  },
  {
    icon: Anchor,
    title: "Marine Repairs",
    description: "Boat repairs, trailer fixes, and marine-grade welding services.",
  },
  {
    icon: Zap,
    title: "All Welding Processes",
    description: "MIG, TIG, Arc, Stick, and Plasma Cutting. We have the right tool for every job.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Professional Mobile Welding & Metal Fabrication
          </h2>
          <p className="text-muted-foreground text-lg">
            From construction equipment to custom fabrications, Big Lou brings certified welding expertise directly to your location in Nassau County.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full bg-secondary border-border hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 24-Hour Emergency Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  24-Hour Emergency Service
                </h3>
                <p className="text-muted-foreground">
                  Urgent repairs? We're available around the clock for emergency welding needs.
                </p>
              </div>
            </div>
            <a href="tel:5162659889">
              <Button variant="cta" size="lg" className="gap-2 whitespace-nowrap">
                <Phone className="w-5 h-5" />
                <span className="font-heading font-bold">(516) 265-9889</span>
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

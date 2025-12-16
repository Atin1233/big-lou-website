import { motion } from "framer-motion";

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
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <p className="text-primary font-medium mb-4">Services</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            From heavy equipment to custom projects, we bring professional welding 
            directly to your location in Nassau County.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 max-w-4xl">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="py-4 border-b border-border"
            >
              <span className="text-foreground">{service}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-16 border-t border-border max-w-4xl"
        >
          <p className="text-muted-foreground mb-4">Welding Processes</p>
          <div className="flex flex-wrap gap-3">
            {processes.map((process) => (
              <span 
                key={process}
                className="px-4 py-2 bg-secondary text-foreground text-sm rounded-full"
              >
                {process}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
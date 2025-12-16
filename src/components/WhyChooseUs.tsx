import { Truck, Award, Clock, Wrench, MapPin, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Truck,
    title: "We Come to You",
    description: "No need to transport heavy equipment. Our mobile welding service brings professional tools and expertise directly to your location.",
  },
  {
    icon: Award,
    title: "Certified Expertise",
    description: "Skilled in MIG, TIG, Arc, Stick welding and Plasma Cutting. Quality craftsmanship on every job, big or small.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Equipment failure doesn't wait for business hours. Our emergency response team is available around the clock.",
  },
  {
    icon: Wrench,
    title: "Versatile Solutions",
    description: "From construction equipment to motorcycles, aluminum to stainless steel – we handle all types of metal fabrication.",
  },
  {
    icon: MapPin,
    title: "Local Nassau Service",
    description: "Proudly serving Nassau County with fast response times. We know the area and we're committed to our community.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every weld is done right the first time. We stand behind our work with professional-grade results.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `linear-gradient(45deg, hsl(var(--steel)) 25%, transparent 25%),
                           linear-gradient(-45deg, hsl(var(--steel)) 25%, transparent 25%),
                           linear-gradient(45deg, transparent 75%, hsl(var(--steel)) 75%),
                           linear-gradient(-45deg, transparent 75%, hsl(var(--steel)) 75%)`,
          backgroundSize: "60px 60px",
          backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px"
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Nassau County's Trusted Mobile Welder
          </h2>
          <p className="text-muted-foreground text-lg">
            Big Lou Mobile Welding delivers professional, on-site metal fabrication with the expertise and equipment to handle any job.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6 md:p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "5AM-10PM", label: "Operating Hours" },
            { value: "24/7", label: "Emergency Service" },
            { value: "Nassau", label: "Service Area" },
            { value: "5+", label: "Welding Processes" },
          ].map((stat, index) => (
            <div key={index} className="p-6">
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

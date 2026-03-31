import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Zap, Target, Users, UserCheck } from "lucide-react";

const services = [
  { icon: Dumbbell, title: "Bodybuilding & Weight Training", desc: "Heavy lifting zones with premium free weights, machines, and benches for serious gains." },
  { icon: HeartPulse, title: "Cardio Sessions", desc: "Treadmills, cycles, ellipticals, and more to keep your heart strong and burn fat fast." },
  { icon: Zap, title: "Strength Training", desc: "Structured programs to build raw power, endurance, and functional strength." },
  { icon: Target, title: "Functional Training", desc: "Full-body workouts that improve everyday movement, balance, and flexibility." },
  { icon: Users, title: "Group Classes", desc: "High-energy group sessions that keep you motivated and accountable." },
  { icon: UserCheck, title: "Personal Training", desc: "One-on-one coaching tailored to your goals with certified fitness experts." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto text-center">
        <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-black mb-14">
          Everything You Need to <span className="text-gradient-red">Get Fit</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 text-left hover:border-primary/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

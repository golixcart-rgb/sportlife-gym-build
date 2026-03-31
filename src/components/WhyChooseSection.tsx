import { motion } from "framer-motion";
import { Dumbbell, Wind, Award, Sparkles, Lock, Users } from "lucide-react";

const facilities = [
  { icon: Dumbbell, title: "Modern Equipment", desc: "Top-brand machines and free weights" },
  { icon: Wind, title: "Air-Conditioned Gym", desc: "Comfortable training environment" },
  { icon: Award, title: "Experienced Trainers", desc: "Certified and passionate coaches" },
  { icon: Sparkles, title: "Clean & Hygienic", desc: "Sanitized daily for your safety" },
  { icon: Lock, title: "Changing Rooms & Lockers", desc: "Secure storage and privacy" },
  { icon: Users, title: "Motivating Community", desc: "Train with like-minded fitness lovers" },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto text-center">
        <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">Why Choose Us</p>
        <h2 className="text-3xl md:text-4xl font-black mb-14">
          World-Class <span className="text-gradient-red">Facilities</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

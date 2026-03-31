import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    price: "₹1,500",
    period: "/month",
    features: ["Unlimited Gym Access", "Cardio Zone", "Locker Facility", "Basic Trainer Guidance"],
    popular: false,
  },
  {
    name: "Quarterly",
    price: "₹4,000",
    period: "/3 months",
    features: ["Unlimited Gym Access", "All Cardio Equipment", "Group Classes", "Locker Facility", "Trainer Guidance"],
    popular: true,
  },
  {
    name: "Half Yearly",
    price: "₹7,000",
    period: "/6 months",
    features: ["Unlimited Gym Access", "All Classes Included", "Locker Facility", "Diet Consultation", "Dedicated Trainer"],
    popular: false,
  },
  {
    name: "Annual",
    price: "₹12,000",
    period: "/year",
    features: ["Unlimited Gym Access", "All Classes & Zones", "Personal Training", "Diet Plan", "Locker Facility", "Priority Support"],
    popular: false,
  },
];

const MembershipSection = () => {
  return (
    <section id="plans" className="section-padding bg-secondary">
      <div className="container mx-auto text-center">
        <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">Membership Plans</p>
        <h2 className="text-3xl md:text-4xl font-black mb-14">
          Choose Your <span className="text-gradient-red">Plan</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-7 text-left flex flex-col ${
                plan.popular
                  ? "bg-primary/10 border-2 border-primary glow-red"
                  : "bg-card border border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" /> Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-1 mt-2">{plan.name}</h3>
              <div className="mb-5">
                <span className="text-3xl font-black text-primary">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="flex-1 space-y-3 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/916303889740?text=Hi%2C%20I%27m%20interested%20in%20the%20" 
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-lg font-bold transition-all ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-gym-red-glow"
                    : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;

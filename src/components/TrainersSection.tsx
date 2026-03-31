import { motion } from "framer-motion";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const trainers = [
  { name: "Rajesh Kumar", role: "Head Coach – Bodybuilding", exp: "8+ Years Experience", img: trainer1 },
  { name: "Priya Sharma", role: "Fitness & Cardio Specialist", exp: "6+ Years Experience", img: trainer2 },
  { name: "Vikram Singh", role: "Strength & Conditioning", exp: "7+ Years Experience", img: trainer3 },
];

const TrainersSection = () => {
  return (
    <section id="trainers" className="section-padding">
      <div className="container mx-auto text-center">
        <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">Our Trainers</p>
        <h2 className="text-3xl md:text-4xl font-black mb-14">
          Meet Your <span className="text-gradient-red">Coaches</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={t.img}
                  alt={`${t.name} – ${t.role} at Sport Life Fitness Club`}
                  loading="lazy"
                  width={512}
                  height={640}
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold">{t.name}</h3>
                <p className="text-primary font-semibold text-sm">{t.role}</p>
                <p className="text-muted-foreground text-sm mt-1">{t.exp}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;

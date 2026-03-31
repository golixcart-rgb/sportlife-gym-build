import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Arun Reddy", text: "Sport Life completely changed my fitness journey. The trainers are incredibly supportive and the gym is always clean and well-maintained.", rating: 5 },
  { name: "Sneha Patil", text: "Best gym near Attapur! Air-conditioned, great equipment, and the group classes are so much fun. Highly recommend for women too.", rating: 5 },
  { name: "Mohammed Faizan", text: "I've tried many gyms in Hyderabad but Sport Life stands out. The bodybuilding section is top-notch and the trainers really know their stuff.", rating: 5 },
  { name: "Divya Krishnan", text: "Joined 6 months ago and I've already seen amazing results. The personal training program is worth every rupee!", rating: 5 },
  { name: "Ravi Teja", text: "Great atmosphere, motivating community, and affordable plans. Sport Life is hands down the best fitness club in Gudimalkapur area.", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto text-center">
        <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-black mb-14">
          What Our Members <span className="text-gradient-red">Say</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-7 text-left"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <span className="font-semibold text-sm">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Second row */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
          {testimonials.slice(3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-7 text-left"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <span className="font-semibold text-sm">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

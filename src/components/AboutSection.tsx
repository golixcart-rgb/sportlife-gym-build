import { motion } from "framer-motion";
import aboutImg from "@/assets/about-gym.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={aboutImg}
              alt="Modern gym equipment at Sport Life Fitness Club Hyderabad"
              loading="lazy"
              width={1280}
              height={864}
              className="rounded-2xl w-full object-cover aspect-[4/3]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Your Ultimate Fitness Destination in{" "}
              <span className="text-gradient-red">Hyderabad</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Welcome to Sport Life Fitness Club – your ultimate destination for serious fitness in Hyderabad.
              We provide state-of-the-art equipment, expert trainers, and a motivating environment for all fitness levels.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Located near Attapur Ring Road, our club serves members from Gudimalkapur, Moghal Nagar, and across Hyderabad.
              Whether you're a beginner or a pro, we have the right program and support to help you crush your goals.
            </p>
            <a
              href="#services"
              className="inline-block bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-bold hover:bg-gym-red-glow transition-colors"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Intense gym workout at Sport Life Fitness Club"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4 py-32">
        <p className="text-primary font-bold uppercase tracking-[0.3em] text-sm md:text-base mb-6 animate-fade-up">
          Sport Life Fitness Club
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Transform Your Body.
          <br />
          <span className="text-gradient-red">Build Your Strength.</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Unisex Fitness Club&nbsp;|&nbsp;Bodybuilding & Cardio&nbsp;|&nbsp;Hyderabad
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#plans"
            className="bg-primary hover:bg-gym-red-glow text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all glow-red"
          >
            Join Now
          </a>
          <a
            href="#contact"
            className="border-2 border-foreground/30 hover:border-primary text-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all hover:text-primary"
          >
            Book Free Trial
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

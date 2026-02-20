import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const cities = ["Одеса", "Київ", "Дніпро", "Львів", "Харків"];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 grid-overlay" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-primary/20 rounded-lg animate-float opacity-30" />
      <div className="absolute bottom-1/3 right-16 w-16 h-16 border border-secondary/20 rounded-full animate-float-reverse opacity-20" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />

      <div className="relative z-10 container text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 text-glow-green text-primary">
            Надійні послуги
            <br />
            <span className="text-foreground">у вашому місті</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Швидко. Професійно. Без зайвих слів. Виїзд майстра протягом 60 хвилин у будь-яке місто.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="tel:+380933956399"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-lg glow-green-strong hover:scale-105 transition-transform duration-300 animate-glow-pulse-slow"
          >
            Замовити зараз
          </a>
          <a
            href="tel:+380933956399"
            className="inline-flex items-center gap-2 text-secondary font-bold text-xl text-glow-blue animate-neon-flicker"
          >
            <Phone className="w-6 h-6" />
            093 395 6399
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center gap-3 md:gap-5 flex-wrap"
        >
          {cities.map((city, i) => (
            <span key={city} className="flex items-center gap-3 md:gap-5">
              <span className="font-display text-sm md:text-base font-semibold text-foreground/60 tracking-widest uppercase">
                {city}
              </span>
              {i < cities.length - 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
